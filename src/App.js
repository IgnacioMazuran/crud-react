import './App.css';
import ListadoNombres from './components/ListadoNombres';
import Ejemplo from './components/Ejemplo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Inicio from './components/registro/Inicio';
import Admin from './components/registro/Admin';
import Login from './components/registro/Login';
import Menu from './components/registro/Menu';

function App() {
  return (
    <div className="container">

      <Router>
      <Menu/>
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
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/inicio'>
            <Inicio />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
