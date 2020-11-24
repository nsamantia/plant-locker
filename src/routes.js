import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Landing from './components/Landing/Landing'
import NewFolder from './components/NewFolder/NewFolder'
import InFolder from './components/InFolder/InFolder'


export default (
    <Switch>
        <Route exact path ="/" component={Login}/>
        <Route path="/Landing" component={Landing}/>
        <Route path ="/NewFolder" component={NewFolder}/>
        <Route path ="/InFolder/:category_id" component={InFolder} />
        
    </Switch>
)