

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS": {
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      tempSortProduct.sort((a, b) => {
        if (sorting_value === "lowest") return a.price - b.price;
        if (sorting_value === "highest") return b.price - a.price;
        if (sorting_value === "a-z") return a.name.localeCompare(b.name);
        if (sorting_value === "z-a") return b.name.localeCompare(a.name);
        return 0;
      });

      return {
        ...state,
        filter_products: tempSortProduct,
      };
    }

    case "UPDATE_FILTERS_VALUE":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case "FILTER_PRODUCTS": {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color } = state.filters;

      // Search filter
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curEle) =>
          curEle.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      // Category filter
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.category === category
        );
      }

      // Company filter
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.company.toLowerCase() === company.toLowerCase()
        );
      }

      // Color filter
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curEle) =>
          curEle.colors.includes(color)
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
