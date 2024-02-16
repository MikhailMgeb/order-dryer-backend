const { getDb, ObjectId } = require('../../db.js');

const deleteDish = async (req, res) => {
    const db = getDb();
    let id;

    try {
        id = new ObjectId(req.params.id);
    } catch (error) {
        res.sendStatus(400);
        return;
    }

    const result = await db.collection('menu').deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        res.sendStatus(404);

        return;
    }

    res.json({ 'message': 'Блюдо успешно удалено!' });
}

module.exports = deleteDish;