import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Set Grid View
  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  // Set List View
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  // Handle Sorting Change
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // Handle Filter Value Updates
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });

    // Trigger filtering after updating filters
    dispatch({ type: "FILTER_PRODUCTS" });
  };

  //   to clear the filter

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // Load Products Once
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // Apply Filters & Sorting When Dependencies Change
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
