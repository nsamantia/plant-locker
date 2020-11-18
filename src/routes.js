import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Landing from './components/Landing/Landing'


export default (
    <Switch>
        <Route exact path ="/" component={Login}/>
        <Route path="landing" component={Landing}/>
        
    </Switch>
)