import { createSlice }  from "@reduxjs/toolkit"


const initialState = {
    date_range: "",
    company: "",
    city: "",
    title: "",
    info:"",

    details: [{
        date_range: "Jan 1972-Dec 2020",
        company: "Gary's Shoes and Accessories",
        city: "Chicago",
        title: "Women's shoe salesman",
        info: ""
    }],

    isAdd: false

}

const experienceSlice=createSlice({
    name:"experience",
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
            state.details.push({date_range:state.date_range,company:state.company,city:state.city,title:state.title,info:state.info})
        },
        removeData:(state,action)=>{
            state.details.splice(action.payload,1)
        }

    }
})

export default experienceSlice.reducer;
export const { toggle, addData ,pushData,removeData} = experienceSlice.actions;