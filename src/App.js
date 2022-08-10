// import Header from "./components/Header";
// import {Button1 ,Button2 , Button3} from "./components/Button";
// import { Image } from "./components/image";

// function App() {
//       return (         
//          <div>
//               <Header />
//               <Button1 />
//               <Button2 />
//               <Button3 /> 
//               <Image/>
//           </div>
//           )
// }

// export default App;

import Header from "./components/Header";
import Button from "./components/Button";
import {Image }from "./components/image";
import Navbar from "./components/Navbar";
import Navitem from "./components/Navitem";
function App (){
return(
    <div>
        <Navitem/>
        <Navbar/>
        <Header/>
        <Button label="Add to Cart"/>
        <Button label="login"/>
        <Button label="Sign up"/>
        <Button label="About"/>
        <Button label="Help"/>
        
        <Image/>

    </div>
)
}

export  default App;