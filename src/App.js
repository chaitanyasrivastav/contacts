import React from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import AuthPage from './component/AuthPage';
import ContactPage from './component/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/contacts" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
