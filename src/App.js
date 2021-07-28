import logo from './logo.svg';
import Header from "./components/header/index"
import './App.css';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FAQs from "./pages/FAQs/index"

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Switch>
    <Route path="/faqs">
    <FAQs />
    </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
  
}

export default App;
