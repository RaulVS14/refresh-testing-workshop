import WordChecker from "./2.1-testing-react-fundamentals/WordChecker";
import Counter from "./2.2-counter-task/Counter";
import Login from "./3.1-testing-react-async/Login";
import QuoteGenerator from "./3.2-quote-generation-task/QuoteGenerator";

const examples = [
  {
    name: "💁‍♀️ Word checker",
    component: WordChecker,
    route: "word-checker",
  },
  { name: "🧑‍💻 Counter", component: Counter, route: "counter" },
  { name: "💁‍♀️ Login", component: Login, route: "login" },
  {
    name: "🧑‍💻 Quote generator",
    component: QuoteGenerator,
    route: "quote-generator",
  },
];

export default examples;
