import FranchiseLander from "./pages/FranchiseLander";

import Ignite from "./pages/Ignite";

function App() {
  return /^\/ignite\/?$/.test(window.location.pathname) ? <Ignite /> : <FranchiseLander />;
}

export default App;
