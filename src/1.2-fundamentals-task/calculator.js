/**
 * Simple calculator function, that accepts operation and 2 numbers
 *
 * Example:
 *   "add", 2, 4 -> 6
 *   "subtract", 10, 5 -> 5
 *
 * It throws error if operation is invalid
 */

export default function calculator(operation, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input values not a number");
    }
    if (operation === "add") {
        return a + b;
    }

    if (operation === "subtract") {
        return a - b;
    }
    if (operation === "multiply") {
        return a * b;
    }
    throw new Error("Invalid operation code");
}
