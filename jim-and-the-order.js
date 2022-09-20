function jimOrders(orders) {
    let t = orders.map((item, index) => {
        return {
            id: index + 1,
            time: item[0] + item[1]
        }
    });
    return t.sort((a, b) => a.time - b.time).map(item => item.id)
}

console.log(jimOrders([ [ 8,1 ], [ 4,2 ], [ 5,6 ],[3,1],[4,3] ]))