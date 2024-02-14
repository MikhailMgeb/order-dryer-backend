const { getDb, ObjectId } = require('../../db.js');

const createOrder = async (req, res) => {
    const db = getDb();
    const item = req.body;

    if (!Object.keys(item).length) {
        res.status(404);
        res.json({ 'massage': 'Ошибка!Пустой заказ!' });
        return;
    }

    await db.collection('data-orders').insertOne(item);

    res.json({ 'massage': 'Заказ принят в работу!' });
}

module.exports = createOrder;