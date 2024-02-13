const express = require('express');
const app = express();
const port = 3000;

const adminHandlers = require('./src/admin-menu');
const adminOrder = require('./src/admin-order');

const cors = require('cors');
const getDb = require('./db');

app.use(cors());
app.use(express.json()); // Тело запроса

app.use('/admin-menu', adminHandlers); // Ручки для создания и удаления меню
app.use('/admin-orders', adminOrder);  // Ручки для создания и удаления заказов

app.get('/image/:filename', (req, res) => {
    const db = getDb();

    const filename = req.params.filename;
    const filePath = __dirname + '/image/' + filename;

    res.sendFile(filePath);
});

app.get('/menu-list', async (req, res) => {
    const db = getDb();
    const result = await db.collection('menu').find({}).toArray();
    
    res.json(result);
});

app.get('/orders-list', (req, res) => {
    const db = getDb();
    res.sendFile(__dirname + '/data-orders.json');
});

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});

