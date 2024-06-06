export default class MyWorld {
    str1 = "hello";
    str2 = "world";
    str3 = "!";

    constructor() {
        console.log("Hello from My World!");
    }

    getHello() {
        return this.str1 + " " + this.str2 + this.str3;
    }
}