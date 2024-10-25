# Bakend-proyectofinal
# API REST con Autenticación - Express.js

## 📝 Descripción
Proyecto de desarrollo backend que implementa un sistema de autenticación y registro de usuarios utilizando Express.js. El sistema permite a los usuarios registrarse, iniciar sesión y acceder a rutas protegidas sin utilizar una base de datos.

## 🎯 Objetivos
- Implementar sistema de registro y autenticación
- Proteger rutas mediante JWT
- Manejar almacenamiento en memoria
- Aplicar validaciones de datos
- Implementar manejo de errores

## 🛠️ Endpoints

### 1. Registro de Usuario
```http
POST /register
```
**Body:**
```json
{
    "username": "Nombre de usuario",
    "lastName": "Apellido",
    "email": "Correo electrónico",
    "universityId": "ID universitario",
    "phone": "Teléfono",
    "password": "Contraseña"
}
```

### 2. Inicio de Sesión
```http
POST /login
```
**Body:**
```json
{
    "username": "Nombre de usuario",
    "password": "Contraseña"
}
```

### 3. Obtener Información de Usuario (Ruta Protegida)
```http
GET /user-info/:id
```
**Headers:**
```
Authorization: Bearer <token>
```
**Respuesta:**
```json
{
    "username": "Nombre de usuario",
    "lastName": "Apellido",
    "email": "Correo del estudiante",
    "universityId": "ID universitario",
    "phone": "Teléfono"
}
```

## 📋 Requisitos Técnicos

### Dependencias Requeridas
- express
- jsonwebtoken
- bcryptjs
- express-validator
- dotenv

### Características Necesarias
- Validación de campos en registro
- Encriptación de contraseñas
- Generación y validación de JWT
- Middleware de autenticación
- Almacenamiento en memoria (sin base de datos)



## 🔒 Requisitos de Seguridad
- Validación de usuarios duplicados
- Encriptación de contraseñas
- Tokens JWT con tiempo de expiración
- Validación de tokens en rutas protegidas
- Manejo seguro de errores

## 📚 Estructura del Proyecto 
```
├── node_modules/
├── src/
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── user.js
│   ├── utils/
│   │   └── validation.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
