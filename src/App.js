import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import Courses from './components/Courses/Courses';
import Searvises from './components/Searvices/Searvises';
import Contract from './components/Contract/Contract';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route exact path="/home">
            <Home></Home>

          </Route>
          <Route exact path="/searvices">
            <Searvises></Searvises>


          </Route>
          <Route exact path="/courses">
            <Courses></Courses>

          </Route>
          <Route exact path="/contact">
            <Contract></Contract>

          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>



    </div>
  );
}

export default App;
