import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'
import Login from './pages/Login';
import Subjects from './pages/Subjects';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route exact path="/subject-list">
                <Subjects/>
              </Route>
              <Route exact path="/home/:classID">
                <Home/>
              </Route>
              <Route path="/qr_generator">
                <QRgen/>
              </Route>
              <Route path="/qr_scanner/:id">
                <QRscan/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
