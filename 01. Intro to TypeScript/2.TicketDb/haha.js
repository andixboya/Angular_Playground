var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function PrintTickets(arr, criteria) {
    var collection = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        var _a = el.split('|'), destination = _a[0], price = _a[1], status_1 = _a[2];
        price = Number(price);
        var ticket = new Ticket(destination, price, status_1);
        collection.push(ticket);
    }
    if (criteria === 'price') {
        collection.sort(function (a, b) { return a[criteria] - b[criteria]; });
    }
    else {
        collection.sort(function (a, b) { return a[criteria].localeCompare(b[criteria]); });
    }
    return JSON.stringify(collection);
}
var result = PrintTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');
console.log(result);
