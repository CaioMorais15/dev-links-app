import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/profile/switch/switch";
import Links from "../components/links/links";
import Social from "../components/sociaLinks/sociallinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";



const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleMode =  () => {
    setIsLightMode((prevMode) => !prevMode);
  }

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo claro" : "Imagem no Modo escuro";


  return (
    <div id="App" className={isLightMode ? "light" : ""}>
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @morais_caio06
      </Profile>
      <Switch mode={toggleMode} infoButton={isLightMode}/>
      <div id="links">
        <ul>
          <Links link={"https://github.com"}>GitHub</Links>
          <Links link={"#"}>Instagram</Links>
          <Links link={"#"}>Portifolio</Links>
          <Links link={"#"}>Projetos</Links>
        </ul>
      </div>
      <div id="sociallinks">
    <Social href={"#"} icon={"logo-github"}/>
    <Social href={"#"} icon={"logo-instagram"}/>
    <Social href={"#"} icon={"logo-tiktok"}/>
    <Social href={"#"} icon={"logo-twitter"}/>
      </div>
      <Footer link={"#"}>@morais_caio06</Footer>
    </div>
    </div>
 );
};

export default App;
