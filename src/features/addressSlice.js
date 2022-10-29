import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Al_Bundy_%28Ed_O%27Neill%29.jpg",
    fullName: "Al Bundy",
    addr: "Chicago, Illinois.",
    phone: "555 1234567",
    email: "Albundy@gmail.com",
    birth: "Nov 1948",
    skills:"",
    isEdit: false,
    skillList:["4 touchdowns in a single game"]
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
        },
        skillPush:(state,action)=>{
            state.skillList.push(state.skills)
        },
        removeData:(state,action)=>{
            state.skillList.splice(action.payload,1)
        }


    }
})

export default addressSlice.reducer;
export const { editInfo, toggle,skillPush,removeData } = addressSlice.actions;