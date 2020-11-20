import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav'
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">

      {props.location.pathname ==='/' ? null: <Nav />}

      {routes}
    </div>
  );
}

export default withRouter(App);
