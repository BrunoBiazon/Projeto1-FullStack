import React, { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext"; 
import { searchFood } from "../contexts/api";
import FoodTable from "./tabela";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function App() {
  const { state, dispatch } = useContext(FoodContext);

  const handleSearch = async () => {
  if (!state.query.trim()) {
    dispatch({ type: "SEARCH_ERROR", payload: "Digite algo para pesquisar." });
    return;
  }
  dispatch({ type: "SEARCH_START" });
  try {
    const results = await searchFood(state.query);
    if (!results || results.length === 0) {
      dispatch({ type: "SEARCH_ERROR", payload: "ERRO: não achado na API" });
      return;
    }
    dispatch({ type: "SEARCH_SUCCESS", payload: results });
  } catch (error) {
    dispatch({ type: "SEARCH_ERROR", payload: "Erro ao buscar alimentos." });
  }
};

  return (
  <div className="app-container">
    <h1 className="app-title">Buscar Alimentos</h1>

    <div className="search-row">
      <TextField
        className="search-input"
        label="Pesquisar alimento"
        variant="outlined"
        value={state.query}
        onChange={e => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
        fullWidth
      />
      <Button
        className="search-button"
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Buscar
      </Button>
    </div>

    {state.loading && <p className="loading">Carregando...</p>}
    {state.error && <p className="error">{state.error}</p>}

    <div className="table-wrapper">
      <FoodTable foods={state.foods} tableBg="#e0e0e0" />
    </div>
  </div>
);

}
