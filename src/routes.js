import {Switch, Route} from 'react-router-dom'
import Info from './components/Info/Info'
import Login from './components/Login/Login'
import Landing from './components/Landing/Landing'
import NewFolder from './components/NewFolder/NewFolder'
import InFolder from './components/InFolder/InFolder'
import SecondNewFolder from './components/SecondNewFolder/SecondNewFolder'


export default (
    <Switch>
        <Route exact path ="/" component={Info}/>
        <Route path="/Landing" component={Landing}/>
        <Route path ="/NewFolder" component={NewFolder}/>
        <Route path ="/InFolder/:category_id" component={InFolder} />
        <Route path = "/SecondNewFolder" component={SecondNewFolder} />
        
    </Switch>
)