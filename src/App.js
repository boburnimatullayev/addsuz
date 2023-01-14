import { BrowserRouter } from "react-router-dom";
import Mainpage from "./component/mainPage/Mainpage";

import Navbar from "./component/navbar/Navbar";


function App() {
  return (
    <div className="App">
   
 
      <BrowserRouter>
        <Navbar />
        <Mainpage />
      </BrowserRouter>
    </div>
  );
}

export default App;
