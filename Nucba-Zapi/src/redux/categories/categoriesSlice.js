import { Categories } from "../../data";
import {createSlice} from "@reduxjs/toolkit";


const INITIAL_STATE ={
    categories: Categories
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: { getCategories: state=> {
        return state
    },

    },
});

export const {getCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;