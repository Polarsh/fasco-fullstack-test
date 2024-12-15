# **FASCO Fullstack Test**

Este es un proyecto fullstack que consiste en un frontend desarrollado con React y un backend con Node.js y MongoDB. El frontend está desplegado en [Vercel](https://fasco-fullstack-test.vercel.app/) y el backend proporciona una API básica para la gestión de productos y tiendas.

---

## **Frontend**

El frontend es una aplicación de React que muestra una interfaz de tienda en línea.

### **Frontend Desplegado**

Puedes ver el frontend en acción en:  
**[https://fasco-fullstack-test.vercel.app/](https://fasco-fullstack-test.vercel.app/)**

### **Rutas del Frontend**

El frontend incluye las siguientes rutas:

- **`/`**: Página principal (Home).
- **`/sign-in`**: Página de inicio de sesión.
- **`/sign-up`**: Página de registro.
- **`/forgot-password`**: Página para recuperar contraseña.
- **`/shop`**: Página de la tienda.
- **`/product/`**: Redirige automáticamente a **`/product/1`**.
- **`/product/:productId`**: Página de detalles del producto.
- **`/cart`**: Página del carrito de compras.
- **`/checkout`**: Página de checkout.

### **Requisitos**

- Node.js (versión >= 14)
- npm o yarn

### **Cómo iniciar el frontend**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Polarsh/fasco-fullstack-test
   cd fasco-fullstack-test/frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:5173`.

---

## **Backend**

El backend es una API construida con Node.js y MongoDB que gestiona productos y tiendas.

### **Documentación Completa del Backend**

Consulta el archivo **[README-backend.md](README-backend.md)** en la raíz del repositorio para obtener más detalles sobre la instalación, configuración y pruebas del backend.

### **Cómo iniciar el backend**

1. Clona el repositorio y navega a la carpeta del backend:
   ```bash
   cd fasco-fullstack-test/backend
   ```

2. Sigue las instrucciones en [README-backend.md](README-backend.md).

---

## **Estructura del Proyecto**

```
fasco-fullstack-test/
│
├── frontend/      # Código del frontend (React)
├── backend/       # Código del backend (Node.js, MongoDB)
├── README.md      # Archivo principal
└── README-backend.md  # Documentación detallada del backend
```

---
