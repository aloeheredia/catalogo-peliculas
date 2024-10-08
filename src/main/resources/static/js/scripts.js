function actorSelected(select){

    let index = select.selectedIndex
    let option = select.options[index]
    let id = option.value
    let nombre = option.text
    let urlImagen = option.dataset.url

    option.disabled = "disabled";
    select.selectedIndex = 0;

    agregarActor(id, nombre, urlImagen);

    let ids = $("#ids").val();

    if (ids == "") {
    $("#ids").val(id);
    } else {
    $("#ids").val(ids + "," + id);
    }
}

function agregarActor(id, nombre, urlImagen) {
    // El return false no envia el formulario al controller. Se elimina el actor en el front y no envia nada al servidor
    let htmlString = `
        <div class="card col-md-3 m-2" style="width: 10rem">
            <img src="{URL-IMAGEN}" class="card-img-top">
            <div class="card-body">
                <p class="card-text">{NOMBRE}</p>
                <button class="btn btn-danger" data-id="{ID}" onclick="eliminarActor(this); return false;">Eliminar</button>
            </div>
        </div>
    `;

    // Reemplazar placeholders con valores reales
    htmlString = htmlString.replace("{URL-IMAGEN}", urlImagen);
    htmlString = htmlString.replace("{NOMBRE}", nombre);
    htmlString = htmlString.replace("{ID}", id);

    // Agregar el HTML generado al contenedor
    $("#protagonistas_container").append(htmlString);
}

function eliminarActor(btn) {
    // Obtener el ID del actor a eliminar desde el botón
    let id = btn.dataset.id;

    // Obtener el nodo padre del padre del botón (la tarjeta del actor)
    let node = btn.parentElement.parentElement;

    // Obtener los IDs de todos los actores en un array
    let arrayIds = $("#ids").val().split(",").filter(idActor => idActor != id);

    // Actualizar el campo de IDs, eliminando el ID del actor eliminado
    $("#ids").val(arrayIds.join(","));

    // Habilitar la opción correspondiente en el select de protagonistas
    $("#protagonistas option[value='" + id + "']").prop("disabled", false);

    // Eliminar el elemento del DOM
    $(node).remove();
}
function previsualizar(){
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("archivo").files[0]);
    reader.onload = function(e) {
        let vista = document.getElementById("vista_previa");
        vista.classList.remove("d-none");
        vista.style.backgroundImage = 'url("' + e.target.result + '")';
    };
}