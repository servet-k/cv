import { useSelector, useDispatch } from "react-redux";
import {toggle,editInfo} from "../features/summarySlice"


const Summary = () => {
    const { overview, isEdit } = useSelector(state => state.summary)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(toggle());

    }
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        dispatch(editInfo({ name, value }))
    }

    return (
        <div className="summary-container">
            <h2>Overview</h2>
            <p>{overview}</p>
            <button className="edit-button" onClick={() => dispatch(toggle())}>edit</button>
            {isEdit &&
                <div className="form-container">
                    <form className="info-edit-form" onSubmit={handleSubmit}>


                        <textarea name="overview" value={overview} type="text" onChange={handleChange} />


                        <button type="submit">Close form</button>



                    </form>
                </div>
            }

        </div>

    )

}

export default Summary;
