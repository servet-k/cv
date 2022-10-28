import { useSelector, useDispatch } from "react-redux"
import { toggle, addData, pushData, removeData } from "../features/educationSlice";


const Education = () => {
    const { isAdd, details } = useSelector(state => state.education)
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(pushData());
        dispatch(toggle());

    }
    const handleAdd = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        dispatch(addData({ name, value }))
    }


    return (
        <div className="education-container">

            <div className="header"><h3>Education</h3>
            <button className="add-button" onClick={() => dispatch(toggle())}>Add Data</button>
            </div>
            {details.map((item, index) => {
                return (
                <div className="education" key={index}>
                    <div className="education-field">
                        <p>{item.graduate_date}</p>
                        <p className="bold">{item.field}</p>
                    </div>
                    <div className="education-field">
                        <p>{item.city}</p>
                        <p className="bold">{item.school}</p>
                    </div>
                    <div className="bottom"></div>

                    <button className="add-button" onClick={() => dispatch(removeData(index))}>Remove</button>


                </div>)
            })
            }

           

            {isAdd &&
                <div className="form-container">
                    <form className="info-edit-form" onSubmit={handleSubmit}>

                        <label htmlFor="graduate">Graduate Date</label>
                        <input name="graduate_date" placeholder="graduate month and year" type="text" onChange={handleAdd} />

                        <label htmlFor="school">School</label>
                        <input name="school" placeholder="school" type="text" onChange={handleAdd} />

                        <label htmlFor="city">City</label>
                        <input name="city" placeholder="city" type="text" onChange={handleAdd} />

                        <label htmlFor="field">Title</label>
                        <input name="field" placeholder="title" type="text" onChange={handleAdd} />



                        <button type="submit">Close form</button>



                    </form>
                </div>

            }



        </div>
    )
}
export default Education;