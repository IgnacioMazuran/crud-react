import './App.css';
import ListadoNombres from './components/ListadoNombres';
import Ejemplo from './components/Ejemplo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Usuario from './components/Usuario';

function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
          <Route exact path='/'>
            <div>
              <Link to='/ejemplo'>A ejemplo</Link>
              <ListadoNombres />
            </div>
          </Route>
          <Route path='/ejemplo'>
            <div>
              <h3>
                <Ejemplo />
                <Link to='/'>A inicio</Link>
              </h3>
            </div>
          </Route>
          <Route path='/usuario/:id'>
            <Usuario />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
