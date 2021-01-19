import logo from './logo.svg';
import './App.css';
import Home from './layouts/Home';
// import Nav from './layouts/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;