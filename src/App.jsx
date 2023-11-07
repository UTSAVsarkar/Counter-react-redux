import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  return (
    <center>
      <div className="px-4 py-5 my-5">
        <Container>
          <Header />
          <DisplayCounter />
          <Controls />
        </Container>
      </div>
    </center>
  );
}

export default App;
