import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const chartSlice = createSlice({
    name: "chart",
    initialState: {
        value: {
            chartItems: [],
            totalPrice: 0,
            quantity: 0
        }
    },
    reducers: {
        updateBoxArray: (state, action) => {
            state.value.chartItems = [...action.payload]
        },
        addToChart: (state, action) => {
             const newItem = action.payload
             const existingItem = state.value.chartItems.find((item) => item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
                state.value.quantity++
                state.value.totalPrice += newItem.price
            }
            
            else {
                state.value.chartItems.push(action.payload) 
                state.value.quantity++
                state.value.totalPrice += newItem.price
            }
        },
        deletefromChart: (state,action) => {
            const selectedItem = action.payload.item
            const existingItem = state.value.chartItems.find((item) => item.id === selectedItem.id)

            if(existingItem.quantity > 0){
                existingItem.quantity--
                existingItem.totalPrice -= selectedItem.price
                state.value.quantity--
                state.value.totalPrice -= selectedItem.price
                
          
            }
            
            if(existingItem.quantity < 1) {
                state.value.chartItems = [...action.payload.array] 
            }
        }
 
    }

        
    

})

export const {updateBoxArray, addToChart, deletefromChart} = chartSlice.actions


export default chartSlice.reducer
