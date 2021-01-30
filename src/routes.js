import { Switch, Route } from "react-router-dom";
import Info from "./components/Info/Info";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Landing from "./components/Landing/Landing";
import NewFolder from "./components/NewFolder/NewFolder";
import InFolder from "./components/InFolder/InFolder";
import InSecondFolder from "./components/InSecondFolder/InSecondFolder";
import SecondNewFolder from "./components/SecondNewFolder/SecondNewFolder";
import InPlant from "./components/InPlant/InPlant";
import NewPlant from "./components/NewPlant/NewPlant";

export default (
  <Switch>
    <Route exact path="/" component={Info} />
    <Route path="/login" component={Login} />
    <Route path="/Register" component={Register} />
    <Route path="/Landing" component={Landing} />
    <Route path="/NewFolder" component={NewFolder} />
    <Route path="/InFolder/:category_id" component={InFolder} />
    <Route path="/InSecondFolder/:category_id" component={InSecondFolder} />
    <Route path="/SecondNewFolder" component={SecondNewFolder} />
    <Route path="/InPLant/:id" component={InPlant} />
    <Route path="/NewPlant" component={NewPlant} />
  </Switch>
);
