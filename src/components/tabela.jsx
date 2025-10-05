import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


/**
 * @param {{
 *   foods: Array<{ food_id: string|number, food_name: string, food_description: string, calories: string|number, nutriments?: any }>,
 *   hasSearched?: boolean
 * }} props
 */
export default function FoodTable({ foods, hasSearched = false }) {
  const [selectedFood, setSelectedFood] = useState(null);

  if (!foods || foods.length === 0) {
    if (hasSearched) {
      return <p>Nenhum alimento encontrado.</p>;
    } else {
      return null;
    }
  }
  
  return (
    <> 
      {/* Tabela principal de alimentos */}
      <TableContainer component={Paper} className="food-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">Nome</TableCell>
              <TableCell align="right" className="table-head-cell">
                Calorias - Porção(100g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((food) => (
              <TableRow
                key={food.food_id}
                hover
                className="table-row"
                onClick={() => {
                  setSelectedFood(food);
                }}
              >
                <TableCell className="table-cell">{food.food_name}</TableCell>
                <TableCell align="right">
                  {food.calories !== "N/A"
                    ? Math.round(Number(food.calories))
                    : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    {/* Tabela Detalhada (proteina, carbo, gordura) */}
      {selectedFood && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setSelectedFood(null)}
              className="modal-close-btn"
            >
              Fechar
            </button>
            <h2 className="modal-title">{selectedFood.food_name}</h2>
          
            <TableContainer component={Paper} className="food-table-container">
              <Table className="nutriments-table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Calorias</TableCell>
                    <TableCell align="right">Carboidrato&nbsp;(g)</TableCell>
                    <TableCell align="right">Proteína&nbsp;(g)</TableCell>
                    <TableCell align="right">Gordura&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">
                      {selectedFood.calories !== "N/A"
                        ? Math.round(Number(selectedFood.calories))
                        : "N/A"}
                    </TableCell>
                    <TableCell align="right"> 
                      {selectedFood.nutriments?.carbohydrates_100g !== undefined //carboidratos
                        ? Math.round(
                            Number(selectedFood.nutriments.carbohydrates_100g)
                          )
                        : selectedFood.nutriments?.carbohydrates !== undefined
                        ? Math.round(
                            Number(selectedFood.nutriments.carbohydrates)
                          )
                        : "N/A"}
                    </TableCell>
                    <TableCell align="right">
                      {selectedFood.nutriments?.proteins_100g !== undefined //proteinas
                        ? Math.round(
                            Number(selectedFood.nutriments.proteins_100g)
                          )
                        : selectedFood.nutriments?.proteins !== undefined
                        ? Math.round(
                            Number(selectedFood.nutriments.proteins)
                          )
                        : "N/A"}
                    </TableCell>
                    <TableCell align="right">
                      {selectedFood.nutriments?.fat_100g !== undefined //gorduras
                        ? Math.round(Number(selectedFood.nutriments.fat_100g))
                        : selectedFood.nutriments?.fat !== undefined
                        ? Math.round(Number(selectedFood.nutriments.fat)) 
                        : "N/A"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
}
