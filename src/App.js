import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { getData } from "./utils/getData";

function App() {
  useEffect(() => {
    // getData();
  }, []);
  return <Layout></Layout>;
}

export default App;
