// class User {
//     private name: string
//     constructor(name: string) {
//         this.name = name
//     }

//     sayHello() {
//         return `${this.name} says hi!`;
//     }
// }
// const user = new User('Pesho');
// console.log(user.sayHello());


 class Request {

    public response: string;
    public fulfilled: Boolean;

    constructor(public method: string,
        public uri: string,
        public version: string,
        public message: string) {

        this.response = undefined
        this.fulfilled = undefined
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);