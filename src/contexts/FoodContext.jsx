import React, { createContext, useReducer } from "react";

export const FoodContext = createContext();

const initialState = {
  query: "",
  foods: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SEARCH_START":
      return { ...state, loading: true, error: null };
    case "SEARCH_SUCCESS":
      return { ...state, loading: false, foods: action.payload };
    case "SEARCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FoodContext.Provider value={{ state, dispatch }}>
      {children}
    </FoodContext.Provider>
  );
}
