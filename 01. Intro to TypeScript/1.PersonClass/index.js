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
var Request = /** @class */ (function () {
    function Request(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = undefined;
    }
    return Request;
}());
var myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
