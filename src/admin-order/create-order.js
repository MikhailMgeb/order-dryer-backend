const fs = require('fs');
const path = require('path');

const createOrder = (req, res) => {
    const item = req.body;

    if (!Object.keys(item).length) {
        res.status(404);
        res.json({ 'massage': 'Ошибка!Пустой заказ!' });
        return;
    }

    const dataOrders = fs.readFileSync(path.join(process.cwd(), 'data-orders.json'), 'utf-8');

    const ordersList = JSON.parse(dataOrders);
    // item.id = ids
    ordersList.push(item)

    fs.writeFileSync(path.join(process.cwd(), 'data-orders.json'), JSON.stringify(ordersList, null, 4), 'utf-8');

    res.json({ 'massage': 'Заказ принят в работу!' });
}

module.exports = createOrder;