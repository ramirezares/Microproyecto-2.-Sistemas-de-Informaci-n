import ChangingNavBar from "./components/ChangingNavBar";

function App() {
  return (
    <>
      <ChangingNavBar kind="offline" />
      <ChangingNavBar kind="client" />
      <ChangingNavBar kind="employee" />
    </>
  );
}

export default App;
