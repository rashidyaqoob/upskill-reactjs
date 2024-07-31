import LargeLists from "./components/LargeLists";

function App() {
  const items = Array.from(
    { length: 10000 },
    (_, index) => `Item ${index + 1}`
  );
  return (
    <div className="App">
      <LargeLists items={items} />
    </div>
  );
}

export default App;
