import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
    name: "boxes",
    initialState: {
        value: {
            boxes: []
        }
    },
    reducers: {
        updateBoxArray: (state, action) => {
            state.value.boxes = [...action.payload]
        },
        makeReservation: (state, action) => {
            state.value.boxes[action.payload.index].userName = action.payload.userName

        },
        cancelReservation: (state,action) => {
            state.value.boxes[action.payload.index].userName = action.payload.userName
        }
 
    }

        
    

})

export const {updateBoxArray, makeReservation, cancelReservation} = boxSlice.actions


export default boxSlice.reducer
