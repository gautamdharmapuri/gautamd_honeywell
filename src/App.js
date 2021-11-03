import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "./router";

function App() {
  return (
    <div className="App">

      <div className="header-div left">
        <div className="header-title">Product Catalog</div>
      </div>
      <div className="main-div left">
        <Router>
          <RouterView />
        </Router>
      </div>
      <div className="footer-div left"></div>
    </div>
  );
}

export default App;
