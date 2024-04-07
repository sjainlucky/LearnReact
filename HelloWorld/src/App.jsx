const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const helloContinents = Array.from(continents, (c) => `Hello ${c}!`);
const message = helloContinents.join(" ");

const element = (
  <div title="Outer div">
    <h1>{message}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(element);
