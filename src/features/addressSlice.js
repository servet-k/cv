import { createSlice } from "@reduxjs/toolkit";
import kitten from "../images/kitten.jpg"

const initialState = {
    image: kitten,
    fullName: "John Doe",
    addr: "elm st. no:11",
    phone: "555 1234567",
    email: "jhondoe@gmail.com",
    birth: "2000-01-01",
    skills:"asda",
    isEdit: false,
}


const addressSlice = createSlice({
    name: "address",
    initialState,

    reducers: {
        editInfo: (state, action) => {
           const name = action.payload.name;
           const value = action.payload.value;
        
            state[name] =value;
        },
        toggle: (state, action) => {
            state.isEdit = !state.isEdit;
        }

    }
})

export default addressSlice.reducer;
export const { editInfo, toggle } = addressSlice.actions;