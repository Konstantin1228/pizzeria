import { configureStore } from '@reduxjs/toolkit'
import popupSlice from './slices/popupSlice'
import searchSlice  from './slices/searchPizzaSlice'
export const store = configureStore({
  reducer: {
    searchSlice,
    popupSlice
},
})