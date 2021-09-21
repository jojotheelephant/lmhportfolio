import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SolidStart from "./Components/SolidStart";
import DesktopUsers from "./Components/DesktopUsers";

function App() {
    return (
        <Router>
            <div>
                {/* PAGES */}
                <Switch>
                    <Route path="/solid-start">
                        <SolidStart />
                    </Route>
                    <Route path="/desktop-users">
                        <DesktopUsers />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
