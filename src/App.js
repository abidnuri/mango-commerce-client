import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Pages/Auth/Login/Login';
import Register from './components/Pages/Auth/Register/Register';
import Navbar from './components/Shared/Header/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
