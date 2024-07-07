const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de Handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Variables de contexto
const images = [
    'image1.jpg',
    'image2.jpg',
    // Agrega todas las imágenes aquí
    'image15.jpg'
];

// Ruta principal
app.get('/', (req, res) => {
    res.render('gallery', { images });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
