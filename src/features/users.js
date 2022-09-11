import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            user: ""
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.value.user = action.payload
        }
    }

        
    

})

export const {addUser} = userSlice.actions


export default userSlice.reducer

