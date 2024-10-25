const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas
app.use('/auth', authRoutes); // Rutas de autenticación
app.use('/user', userRoutes); // Rutas de usuario

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
