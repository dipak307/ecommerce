import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext=createContext();

const initialState={
  filter_products:[],
  all_products:[],
  grid_view:true,
  sorting_value:"lowest",
  filters:{
    text:"",
    category:"all",
    company:"all",
    color:"all",
    maxPrice:0,
    price:0,
    minPrice:0,
  }
};

export const FilterContextProvider=({children})=>{

  const {products}=useProductContext();

  // console.log(products);

const[state,dispatch]=useReducer(reducer,initialState);

// to set grid view
const setGridView=()=>{
  return dispatch({type:"SET_GRID_VIEW"})
}
const setListView=()=>{
  return dispatch({type:"SET_LIST_VIEW"})
}

//sorting function
const sorting=(event)=>{
  let userValue=event.target.value;
  dispatch({type:"GET_SORT_VALUE", payload:userValue})
}


const updateFilterValue=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
    // console.log(value);
   return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
}

//to clear the filter
const clearFilters=()=>{
  dispatch({type: "CLEAR_FILTERS"});
}





///sort the product

useEffect(()=>{
  dispatch({ type: "FILTER_PRODUCTS" });
  dispatch({ type: "SORTING_PRODUCTS" });
},[products,state.sorting_value,state.filters])

useEffect(()=>{
  dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
},[products]);
  return (
    <FilterContext.Provider
      value={{ ...state ,
       setGridView,
       setListView,
       sorting,
       updateFilterValue,
       clearFilters
       }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};


