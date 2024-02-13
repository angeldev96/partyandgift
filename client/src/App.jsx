// import LoginComponent from "./LoginComponent";
// import DashboardComponent from "./DashboardComponent";
// import  { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpComponent from "./SignUpComponent";


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // Lógica para iniciar sesión
  //   setIsLoggedIn(true);
  // };


  // const handleLogout = () => {
  //   // Lógica para cerrar sesión
  //   setIsLoggedIn(false);
  // };

  return (
  //   <Router>
  //   <Switch>
  //     <Route exact path="/">
  //       {isLoggedIn ? (
  //         <DashboardComponent onLogout={handleLogout} />
  //       ) : (
  //         <LoginComponent onLogin={handleLogin} />
  //       )}
  //     </Route>
  //     {/* Otras rutas */}
  //   </Switch>
  // </Router>
  <SignUpComponent/>
    
  );
}

export default App;
