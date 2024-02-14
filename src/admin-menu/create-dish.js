const { getDb, ObjectId } = require('../../db.js');

const createDish = async (req, res) => {
    const db = getDb();
    const item = req.body;

    if (!Object.keys(item).length) {
        res.status(404);
        res.json({ 'massage': 'Вы отправили пустоту!' });
        return;
    }

    const menuList = await db.collection('menu').find({}).toArray();

    for (const dish of menuList) {
        if (dish.name === item.name) {
            res.status(404);
            res.json({ 'massage': 'Такое блюдо уже существует!' });
            return;
        }
    }

    await db.collection('menu').insertOne(item);

    res.json({ 'massage': 'Успешно добавлен!' });
}

module.exports = createDish;