
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import Contract from './pages/Contract/Contract';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivetRouter from './pages/Login/PrivetRouter/PrivetRouter';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="/home">
              <Home></Home>
          </Route> 

          <Route path="/about">
              <AboutUs></AboutUs>
          </Route> 

          <Route path="/contract">
              <Contract></Contract>
          </Route> 
           
           <PrivetRouter path="/booking/:serviceid">
             <Booking></Booking>
           </PrivetRouter>

           <Route path="/login">
             <Login></Login>
           </Route>

          <Route path="*">
              <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
      
    </div>
  );
}

export default App;
