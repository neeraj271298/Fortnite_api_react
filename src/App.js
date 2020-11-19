import About from './components/About';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home'
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
