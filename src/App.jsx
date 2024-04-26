// import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";
import React from "react";



function App() {
  // const handleClick = () => {
  //   alert('Button Clicked!')
  // };
  return (
    <div className="App">
      <Navbar />
      <Swap />
      {/* <div className="btn-con"><Button onClick={handleClick} className="btn1" children="Get Started" />
      <Button onClick={handleClick} className="btn2" children="Swap ERC20" />
      </div> */}
    </div>
  );
}

export default App;
