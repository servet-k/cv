import { useSelector, useDispatch } from "react-redux"
import { toggle, addData, pushData, removeData } from "../features/experienceSlice";


const Experience = () => {
    const { isAdd, details } = useSelector(state => state.experience)
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
        <div className="experience-container">
            <div className="header"><h3>Experience</h3>
                <button className="add-button" onClick={() => dispatch(toggle())}>Add Data</button>
            </div>
            {details.map((item, index) => {
                return (<div className="experience" key={index}>
                    <div className="experience-field">
                        <p>{item.date_range}</p>
                        <p className="bold">{item.company}</p>
                    </div>
                    <div className="experience-field">
                        <p>{item.city}</p>
                        <p className="bold">{item.title}</p>

                    </div>
                    <div className="info">
                        <p>{item.info}</p>
                    </div>
                    <div className="bottom"></div>

                    <button className="add-button" onClick={() => dispatch(removeData(index))}>Remove</button>


                </div>)
            })


            }



            {isAdd &&
                <div className="form-container">
                    <form className="info-edit-form" onSubmit={handleSubmit}>

                        <label htmlFor="date_range">date range</label>
                        <input name="date_range" placeholder="date_range month and year" type="text" onChange={handleAdd} />

                        <label htmlFor="company">company</label>
                        <input name="company" placeholholer="company" type="text" onChange={handleAdd} />

                        <label htmlFor="city">City</label>
                        <input name="city" placeholder="city" type="text" onChange={handleAdd} />

                        <label htmlFor="title">Title</label>
                        <input name="title" placeholder="title" type="text" onChange={handleAdd} />

                        <label htmlFor="info">details summary</label>
                        <textarea name="info" placeholder="info" type="text" onChange={handleAdd} />




                        <button type="submit">Close form</button>



                    </form>
                </div>

            }



        </div>
    )
}
export default Experience;