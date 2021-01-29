import "./App.css";

function App() {
  const items = [
    "position",
    "display",
    "border",
    "padding",
    "margin",
    "overflow",
    "background",
    "font",
    "text",
    "transform",
  ];

  const listItems = items.map((item) => (
    <li key={item.toString()}>
      <input type="checkbox" />
      {item}
    </li>
  ));

  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;

/* Egy szinten levő listaelemeknek egyedi azonosítót kell adni, stringnek kell lennie */
