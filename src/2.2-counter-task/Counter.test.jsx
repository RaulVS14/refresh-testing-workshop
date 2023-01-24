/**
 *  👉 TASK 2:
 * Cover Counter component with tests
 *
 * Run tests with:
 * > npm test Counter
 * */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

/**
 * 2.1
 * Write a test that Counters renders with initial value 0 and displays increment
 * and decrement buttons. This is similar to the first test we wrote in WordChecker component.
 * No interactivity yet, just check the initial render to practice accessing elements
 *
 * 💡 Tips:
 * - To access buttons use `getByRole("button", { name: /label/i })`
 * - To access counter's value you can use `getByText(/count: X/i)` query or (alternatively) you
 *   can setup a testId and match by testId
 */
test.todo("renders with initial value 0 and increment and decrement buttons");

/**
 * 2.2
 * Write a test to check that Counter allows to increment and decrement value.
 * The flow would be: render component, check initail value, click increment or
 * decrement buttons and check that the value is correct afterwards
 *
 * You may create `setup` helper function as we did in the example with WordChecker
 *
 * 💡 Tips:
 * - To click on a button use `await user.click(button)`, but don't forget to use
 *   userEvent.setup() first
 * - Don't forget to add async to your test function (same as we did in the example)
 */
test.todo("allows increment and decrement");

/**
 * 2.3 🚀 BONUS (TDD)
 * Allows to set initial value via props
 *
 * Example:
 * <Counter initialValue={3} />
 */
test.todo("allows to set initial value");

/**
 * 2.4 🚀 BONUS (TDD)
 * Does not allow to go below min and above max
 *
 * Make it so Counter component can accept min and max props and does
 * not allow user to go below min and above max by making buttons disabled
 *
 * If you have additional time, make sure Counter component displays alert message
 * when count is out of range
 *
 * Example:
 * <Counter min={5} max={12} />
 *
 * 💡 Tips:
 * - To check if button is disabled use `toBeDisabled()` matcher
 * - To check if button is enabled use `toBeEnabled()` matcher
 */
test.todo("does not allow to go below min and above max");
