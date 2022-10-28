import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    graduate_date: "",
    school: "",
    city: "",
    field: "",

    details: [{
        graduate_date: "july 1994",
        school: "Oxford",
        city: "London",
        field: "BS in Electric&Electronics Engineering"
    }],

    isAdd: false

}

const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addData: (state, action) => {
            const { name, value } = action.payload;
            state[name]=value;
        },
        toggle: (state, action) => {
            state.isAdd = !state.isAdd;
        },
        pushData:(state,action)=>{
            state.details.push({graduate_date:state.graduate_date,school:state.school,city:state.city,field:state.field})
        },
        removeData:(state,action)=>{
            state.details.splice(action.payload,1)
        }

    }
})

export default educationSlice.reducer;
export const { toggle, addData ,pushData,removeData} = educationSlice.actions;