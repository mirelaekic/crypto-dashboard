import Home from "./pages/Home";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard";
function App() {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/crypto" component={Dashboard} />
        </Switch>
      </AnimatePresence>
  );
}

export default App;
