const fs = require('fs');
const path = require('path');

const deleteDish = (req, res) => {
    const id = req.params.id
    console.log(id);

    if (id.length === 0) {
        res.status(404);
        res.json({ 'massage': 'Нет такого блюда!' });
        return;
    }

    const database = fs.readFileSync(path.join(process.cwd(), 'database.json'), 'utf-8');

    const menuList = JSON.parse(database).filter(item => item.id !== id);

    fs.writeFileSync(path.join(process.cwd(), 'database.json'), JSON.stringify(menuList, null, 4), 'utf-8');

    res.json({ 'massage': 'Блюдо успешно удалено!' });
}

module.exports = deleteDish;