const { getDb, ObjectId } = require('../../db.js');

const deleteOrder = async (req, res) => {
    const db = getDb();
    let id;

    try {
        id = new ObjectId(req.params.id);
    } catch (error) {
        res.sendStatus(400);

        return;
    }

    const orderList = await db.collection('data-orders').deleteOne({ _id: id });

    if (orderList.deletedCount === 0) {
        res.sendStatus(404);

        return;
    }

    res.json({ 'message': 'Заказ успешно собран!' });
}

module.exports = deleteOrder;