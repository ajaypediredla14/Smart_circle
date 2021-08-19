import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Smartdeal from './components/Smartdeal/Smartdeal';
import Contact from './components/Contact/Contact';
import {Container} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Container fluid="true" className="pt_70">
          <Router>
          <div>
            <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/SmartDeal' component={Smartdeal} />
                    <Route exact path='/Contact' component={Contact} />
                </Switch>
            </div>
          </Router>
     </Container>
  );
};

export default App;
