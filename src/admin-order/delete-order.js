const fs = require('fs');
const path = require('path');

const deleteOrder = (req, res) => {
    const id = req.params.id;
    console.log(id);

    if (!id.length) {
        res.status(404);
        res.json({ 'massage': 'Вы удалили пустоту!' });
        return;
    }

    const dataOrders = fs.readFileSync(path.join(process.cwd(), 'data-orders.json'), 'utf-8');

    const orderList = JSON.parse(dataOrders).filter(itemOrder => itemOrder.id !== id);

    fs.writeFileSync(path.join(process.cwd(), 'data-orders.json'), JSON.stringify(orderList, null, 4), 'utf-8');

    res.json({ 'massage': 'Заказ успешно собран!' });
}

module.exports = deleteOrder;