import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
// eslint-disable-next-line
import { Route } from "react-router-dom";

const HatsPage = () => <h1>HATS PAGE</h1>;

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
