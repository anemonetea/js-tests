import STR1 from './constants1.js';
import { STR1 as STR1_1, STR2, STR3, str } from './constants2.js';
import MyWorld from './class1.js';
import { MyWorld2 } from './class2.js';

/*
DOES NOT WORK:

import * from './constants3.js';  // there is `export * from "mod"` but there is no `import * from "mod"`
*/

import * as constants3 from './constants3.js';
import * as CONST4 from './constants4.js';


export default function main() {
    console.log("0: Hello world!");
    console.log("1:", STR1());
    console.log("2.1:", STR1_1, STR2, STR3);
    console.log("2.2:", str());
    console.log("3:", constants3.STR1NG, constants3.STRING2, constants3.namedFunction());
    console.log("4:", CONST4.STR1 + CONST4.STR2 + CONST4.STR3);
    let world1 = new MyWorld();
    console.log("world1:", world1);
    console.log("world1 hello:", world1.getHello());
    let world2 = new MyWorld2();
    console.log("world2:", world2);
    console.log("world2 hello:", world2.getHello());
}