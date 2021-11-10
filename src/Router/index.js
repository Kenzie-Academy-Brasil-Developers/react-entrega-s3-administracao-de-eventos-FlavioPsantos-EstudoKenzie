
import { Route, Switch } from "react-router-dom";
import Casamento from "../Pages/Casamento";
import Confraternizacao from "../Pages/Confraternizacao";
import Formatura from "../Pages/Formatura";
import DashBoard from "../Pages/Home";


const Routers = () => {
    return (
        <Switch>
            <Route exact path="/">
                <DashBoard />
            </Route>
            <Route path="/casamento">
                <Casamento />
            </Route>
            <Route path="/formatura">
                <Formatura />
            </Route>
            <Route path="/confraternizacao">
                <Confraternizacao />
            </Route>
        </Switch>

    )

}
export default Routers;