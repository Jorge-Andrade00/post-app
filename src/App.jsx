import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Entries from './components/Entries'
import Formulario from "./components/Formulario";

function App() {
  return (
    <Router>
      <Switch>
        <Route component = {Formulario} path = '/' exact/>
        <Route component = {Entries} path = '/posts'/>
      </Switch>
    </Router>
  );
}

export default App;
