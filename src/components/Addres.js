import { useSelector, useDispatch } from "react-redux";
import { editInfo, toggle } from "../features/addressSlice";



const Address = () => {
    const { fullName, addr, phone, email, birth, isEdit,image,skills } = useSelector(state => state.info)
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
        <div className="address-container">
            <img src={image} alt="cv" width="150px" />
            <div className="personal-info">
                
                <h3>FullName</h3>
                <p>{fullName}</p>

            </div>
                       
            <div className="address">
                <h3>Address</h3>
                <p>{addr}</p>
            </div>
            <div className="phone">
                <h3>Phone</h3>
                <p>{phone}</p>
            </div>
            <div className="email">
                <h3>Email</h3>
                <p>{email}</p>
            </div>
            <div className="birth">
                <h3>Date of Birth</h3>
                <p>{birth}</p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <p>{skills}</p>
            </div>
            

            <button className="edit-button" onClick={() => dispatch(toggle())}>edit</button>
            {
                isEdit &&

                <div className="form-container">
                    <form className="info-edit-form" onSubmit={handleSubmit}>

                        <label htmlFor="address">Address</label>
                        <input name="addr" value={addr} placeholder="address info" type="text" onChange={handleChange} />

                        <label htmlFor="phone">Phone</label>
                        <input name="phone" value={phone} placeholder="phone info" type="text" onChange={handleChange} />


                        <label htmlFor="email">Email</label>
                        <input name="email" value={email} placeholder="email info" type="email" onChange={handleChange} />

                        <label htmlFor="birth">Phone</label>
                        <input name="birth" value={birth} placeholder="Date of birth" type="date" onChange={handleChange} />
                       
                        <label htmlFor="skills">Phone</label>
                        <textarea name="skills" value={skills} placeholder="skills" type="text" onChange={handleChange} />


                        <button type="submit">Close form</button>



                    </form>
                </div>
            }




        </div>

    )
}

export default Address;