/*
default exports. 
Only functions or classes can work.
 */
export default function STR1() {
    return "Hello World!";
}

/*
DOES NOT WORK:

// 1. Adding multiple default exports per file
export default function STR2() {}
export default function STR3() {}

// 2. Exporting variables
export default STR1 = "Hello";  // Gives: "Uncaught ReferenceError: STR1 is not defined"
*/