class Ticket {

    constructor(public destination: string,
        public price: number,
        public status: string) {

    }
}

function PrintTickets(arr, criteria) {

    let collection = [];
    for (const el of arr) {

        let [destination, price, status] = el.split('|');

        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        collection.push(ticket);
    }

    if (criteria === 'price') {
        collection.sort(function (a, b) { return a[criteria] - b[criteria]; });
    }
    else {
        collection.sort(function (a, b) { return a[criteria].localeCompare(b[criteria]) });
    }

    return JSON.stringify(collection);
}

let result = PrintTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')
console.log(result);