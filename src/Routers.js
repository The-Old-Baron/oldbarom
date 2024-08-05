import AppliedRoute from "./components/AppliedRoute";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route path="aplications/" element={<ApplicationHome />} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);