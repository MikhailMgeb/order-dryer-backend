const fs = require('fs');
const path = require('path');

const createDish = (req, res) => {
    const item = req.body;

    if (!Object.keys(item).length) {
        res.status(404);
        res.json({ 'massage': 'Вы отправили пустоту!' });
        return;
    }

    const database = fs.readFileSync(path.join(process.cwd(), 'database.json'), 'utf-8');

    const menuList = JSON.parse(database);

    for (const dish of menuList) {
        if (dish.id === item.id) {
            res.status(404);
            res.json({ 'massage': 'Такое блюдо уже существует!' });
            return;
        }
    }

    menuList.push(item)

    fs.writeFileSync(path.join(process.cwd(), 'database.json'), JSON.stringify(menuList, null, 4), 'utf-8');

    res.json({ 'massage': 'Успешно добавлен!' });
}

module.exports = createDish;