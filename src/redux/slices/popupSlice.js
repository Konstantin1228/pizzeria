import {
    createSlice
} from "@reduxjs/toolkit";


const initialState = {
    itemsToCart: [],
    totalPrice: 0,
};

export const popupSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        itemsCountMinus(state, action) {
            const {
                index
            } = action.payload
            state.itemsToCart[index].count = state.itemsToCart[index].count - 1
            state.totalPrice = state.itemsToCart.reduce((summ, obj) => {
                return obj.totalPrice * obj.count + summ
            }, 0)

        },
        itemsCountPlus(state, action) {
            const {
                index
            } = action.payload
            state.itemsToCart[index].count = state.itemsToCart[index].count + 1
            state.totalPrice = state.itemsToCart.reduce((summ, obj) => {
                return obj.totalPrice * obj.count + summ
            }, 0)
        },
        itemsSplice(state, action) {
            state.itemsToCart.splice(action.index, 1)
            state.totalPrice = state.itemsToCart.reduce((summ, obj) => {
                return obj.totalPrice * obj.count + summ
            }, 0)
        },
        addToCart(state, action) {
            const findItem = state.itemsToCart.find((obj) => obj.id == action.payload.id && obj.filterActiveAddtive.toString() == action.payload.filterActiveAddtive.toString() && obj.activeSize == action.payload.activeSize && obj.activeDrought == action.payload.activeDrought)
            if (findItem) {
                findItem.count++
            } else {
                state.itemsToCart.push(action.payload)
            }
            state.totalPrice = state.itemsToCart.reduce((summ, obj) => {
                return obj.totalPrice * obj.count + summ
            }, 0)
        },
      
    },

});

export const {
    addToCart,
    setEstimatedPrice,
    itemsCountPlus,
    itemsCountMinus,
    itemsSplice,
} = popupSlice.actions;

export default popupSlice.reducer;