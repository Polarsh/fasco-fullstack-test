# **Product & Store API**

Esta es una API que gestiona la relación entre productos y tiendas. Permite realizar operaciones CRUD en productos y tiendas, así como asociar múltiples tiendas a un producto y viceversa.

---

## **Requisitos**

- Node.js (versión >= 14)
- MongoDB (local o en la nube)
- Postman (opcional, para realizar pruebas con las colecciones proporcionadas)

---

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Polarsh/fasco-fullstack-test
   cd fasco-fullstack-test/backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Personaliza el archivo `.env` en la carpeta `backend` (opcional).
   - Asegúrate de definir las siguientes variables:
     ```
     MONGO_URI=mongodb://localhost:27017/fasco_test
     PORT=3000
     ```

4. Inicia el servidor:
   ```bash
   npm run start:dev
   ```

   El servidor estará disponible en `http://localhost:3000`.

---

## **Colección de Postman**

En la carpeta `backend/collections` encontrarás un archivo JSON llamado **Backend Test.postman_collection.json** con la colección para realizar pruebas en **Postman**.

### Pasos para Importar:

1. Abre Postman.
2. Haz clic en "Importar" y selecciona el archivo JSON ubicado en `backend/collections/Backend Test.postman_collection.json`.
3. Realiza las solicitudes disponibles para probar la API.

---

## **Rutas Principales**

### **Productos**
- **GET** `/products`: Obtiene todos los productos.
- **GET** `/products/:productId`: Obtiene un producto por su ID.
- **POST** `/products`: Crea un nuevo producto.
- **PUT** `/products/:productId`: Actualiza un producto existente.
- **DELETE** `/products/:productId`: Elimina un producto.

### **Tiendas**
- **GET** `/stores`: Obtiene todas las tiendas.
- **GET** `/stores/:storeId`: Obtiene una tienda por su ID.
- **POST** `/stores`: Crea una nueva tienda.
- **PUT** `/stores/:storeId`: Actualiza una tienda existente.
- **DELETE** `/stores/:storeId`: Elimina una tienda.

### **Relación Producto-Tienda**
- **POST** `/products/:productId/stores/:storeId`: Asocia una tienda a un producto.
- **GET** `/products/:productId/stores`: Obtiene las tiendas asociadas a un producto.
- **GET** `/products/:productId/stores/:storeId`: Obtiene una tienda específica asociada a un producto.
- **PUT** `/products/:productId/stores`: Actualiza las tiendas asociadas a un producto.
- **DELETE** `/products/:productId/stores/:storeId`: Elimina una tienda asociada a un producto.

---

## **Base de Datos**

Asegúrate de que tu instancia de MongoDB esté en ejecución. La base de datos se conectará automáticamente usando la URI definida en las variables de entorno.

---

## **Ejecución de Pruebas**

Para ejecutar los tests:

1. Corre las pruebas:
   ```bash
   npm run test
   ```