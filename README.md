
# Proyecto Películas

Este es un proyecto basado en **Java** y **Spring Boot** para la gestión de películas. La aplicación está configurada con **Maven** como herramienta de construcción y gestión de dependencias.

## Estructura del Proyecto

- **`src/`**: Contiene el código fuente de la aplicación.
- **`pom.xml`**: Archivo de configuración de Maven, contiene las dependencias y configuraciones del proyecto.
- **`mvnw/`**: Wrapper de Maven para facilitar la ejecución del proyecto sin necesidad de tener Maven instalado globalmente.
- **`target/`**: Carpeta donde se generan los archivos de compilación (artefactos) del proyecto.
- **`.gitignore`**: Archivo que especifica qué archivos o carpetas deben ser ignorados por el control de versiones Git.

## Requisitos

- **Java 11+**
- **Maven 3.6+**
- **Spring Boot 2.5+**

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:
    ```bash
    git clone <URL_del_repositorio>
    ```
   
2. Navegar al directorio del proyecto:
    ```bash
    cd peliculas
    ```

3. Ejecutar la aplicación con Maven:
    ```bash
    ./mvnw spring-boot:run
    ```

4. La aplicación estará disponible en `http://localhost:8080`.

## Funcionalidades

- Gestión de películas: Crear, leer, actualizar y eliminar películas.
- Integración con Thymeleaf para la parte visual de la aplicación.
  
## Desarrollo

- **Spring Boot**: Framework principal para el desarrollo del backend.
- **Thymeleaf**: Motor de plantillas para la vista.
- **Maven**: Herramienta de construcción y gestión de dependencias.

## Contribuir

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz tus cambios y realiza un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT.
