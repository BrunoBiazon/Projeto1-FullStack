import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./style.css"; // importa os estilos globais



function MenuHeader() {
  return (
    <div className="menu-Header">
      <Tooltip title="Calorias totais dos alimentos selecionados">
        <div className="menu-item">Calorias</div>
      </Tooltip>

      <Tooltip title="Carboidratos totais dos alimentos selecionados">
        <div className="menu-item">Carboidratos</div>
      </Tooltip>

      <Tooltip title="Proteínas totais dos alimentos selecionados">
        <div className="menu-item">Proteínas</div>
      </Tooltip>

      <Tooltip title="Gorduras totais dos alimentos selecionados">
        <div className="menu-item">Gorduras</div>
      </Tooltip>
      <Tooltip title="API">
      <div className="menu-item" onClick={() => window.location.href = "https://world.openfoodfacts.org"}>API</div>
    </Tooltip>

    </div>
  );
}

export default MenuHeader;
