import { useSelector, useDispatch } from "react-redux";
import { editInfo, toggle, skillPush, removeData } from "../features/addressSlice";



const Address = () => {
    const { fullName, addr, phone, email, birth, isEdit, image, skills, skillList } = useSelector(state => state.info)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(toggle());
        if (skills!==""){
        dispatch(skillPush());
        }

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

                <h3>Full Name</h3>
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
                {skillList.map((item, index) => {
                    return (<div><li key={index}
                        onClick={() => dispatch(removeData(index))}>
                        {item}</li>
                        <div className="bottom"></div>
                    </div>)
                })}
            </div>


            <button className="edit-button" onClick={() => dispatch(toggle())}>edit</button>
            {
                isEdit &&

                <div className="form-container">
                    <form className="info-edit-form" onSubmit={handleSubmit}>

                        <label htmlFor="image">Picture url</label>
                        <input name="image" value={image} placeholder="Enter url of picture" type="text" onChange={handleChange} />


                        <label htmlFor="fullName">Full Name</label>
                        <input name="fullName" value={fullName} placeholder="Full name" type="text" onChange={handleChange} />


                        <label htmlFor="address">Address</label>
                        <input name="addr" value={addr} placeholder="address info" type="text" onChange={handleChange} />

                        <label htmlFor="phone">Phone</label>
                        <input name="phone" value={phone} placeholder="phone info" type="text" onChange={handleChange} />


                        <label htmlFor="email">Email</label>
                        <input name="email" value={email} placeholder="email info" type="email" onChange={handleChange} />

                        <label htmlFor="birth">Date of Birth</label>
                        <input name="birth" value={birth} placeholder="Date of birth" type="text" onChange={handleChange} />

                        <label htmlFor="skills">Skills</label>
                        <textarea name="skills" value={skills} placeholder="for every skill,click edit" onChange={handleChange} />


                        <button type="submit">Close form</button>



                    </form>
                </div>
            }




        </div>

    )
}

export default Address;