import { BrowserRouter as Router, useRoutes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Loader from "./components/Loader";
import routes from "./routes/routes";

const allRoutes = [...routes];

function AppRoutes() {
  const routes = useRoutes(allRoutes);
  return routes;
}

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading or replace with actual loading logic
  //   const timer = setTimeout(() => setLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    // <Loader isLoading={loading}>
    <Router>
      <AppRoutes />
    </Router>

    // {/* </Loader> */}
  );
}

export default App;
