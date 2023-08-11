import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/profile/switch/switch";
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";


const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo claro" : "Imagem no Modo escuro";

  return (
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @ProfCastello
      </Profile>
      <Switch></Switch>
      <div id="links">
        <ul>
          <Links link={"https://github.com"}>GitHub</Links>
          <Links link={"#"}>Instagram</Links>
          <Links link={"#"}>Portifolio</Links>
          <Links link={"#"}>Projetos</Links>
        </ul>
      </div>
    </div>
  );
};

export default App;
