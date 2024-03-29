import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/fontawesome-free-solid';
import { Navbar } from 'react-bootstrap';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <Navbar className="px-4 text-white bg-blue-dark d-flex justify-content-between">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            &#60; HOME
          </Link>
          <h3 className="m-0">COVID-19 STATS</h3>
          <span>
            <FontAwesomeIcon icon={faMicrophone} className="me-4" />
            <FontAwesomeIcon icon={faCog} />
          </span>
        </Navbar>
      </header>
      <main>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
