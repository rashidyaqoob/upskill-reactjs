import {
  Toggle,
  ToggleOn,
  ToggleOff,
  ToggleButton,
} from "./components/Toggle.tsx";

const App = () => {
  return (
    <Toggle>
      <ToggleOn>Switch is on!</ToggleOn>
      <ToggleOff>Switch is off!</ToggleOff>
      <ToggleButton />
    </Toggle>
  );
};

export default App;
