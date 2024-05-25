import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../features/todoslice"
const store = configureStore({
    reducer : todoreducer
})

export default store;