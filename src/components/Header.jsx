import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyleHeader, Navegacao } from "../styles/headerStyle";
// outra forma de importar é usando S
// import * as S from "";
import Menu from "../assets/menu.svg";
import X from "../assets/x.svg";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <StyleHeader>
      <nav>
        <Navegacao>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="projetos">Projetos</Link>
          </li>
        </Navegacao>
      </nav>
    </StyleHeader>
  );
}
export default Header;
