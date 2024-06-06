export class MyWorld2 {
    str1 = "Hello";
    str2 = " World";
    str3 = "!";

    constructor() {
        console.log("Hello from My World v2!");
    }

    getHello() {
        return this.str1 + this.str2 + this.str3;
    }
}