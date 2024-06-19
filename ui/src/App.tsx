import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { CreatePage } from "./pages/Create";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreatePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
