// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import "./Login.css"

// export const CreateParticipant = () => {
//     const [isMagician, setIsMagician] = useState(false)
//     const navigate = useNavigate()

//     const handleRegister = (e) => {
//         e.preventDefault()
//         const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
//         const token = tokenObj ? tokenObj.token : null;
//         fetch(`http://localhost:8000/participants`, {
//             method: "POST",
//             body: JSON.stringify({
//                 ismagician: isMagician,
//                 Authorization: token ? `Token ${token}` : null
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then(res => res.json())
//             navigate("/")
          
            
//     }

//     return (
//         <div className="display">
//             <main className="container">
//                 <section>
//                     <form className="form--login" onSubmit={handleRegister}>
//                         <h1 className="text-4xl mt-7 mb-3">Magician Finder</h1>
//                         <fieldset>
//                             <label htmlFor="selectIsMagician">Register as a Magician?</label>
//                             <select style={{marginBottom: "15px"}} type="isMagician" id="selectIsMagician"
//                             value={isMagician} onChange={evt => setIsMagician(evt.target.value)}>
//                             <option value={true}>Yes</option>
//                             <option value={false}>No</option>
//                             </select>
//                         </fieldset>
//                         <fieldset>
//                             <button type="submit" className="button p-3 rounded-md bg-blue-800 text-blue-100">
//                                 Submit
//                             </button>
//                         </fieldset>
//                     </form>
//                 </section>
//             </main>
//         </div>
//     )
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const CreateParticipant = () => {
    const [isMagician, setIsMagician] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
        const token = tokenObj ? tokenObj.token : null;
        fetch(`http://localhost:8000/participants`, {
            method: "POST",
            body: JSON.stringify({
                ismagician: isMagician,
               
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Token ${token}` : null
            }
        })
            .then(res => res.json())
            .then(() => navigate("/"));
    };

    const handleSelectChange = (evt) => {
        // Convert the value from string to boolean
        setIsMagician(evt.target.value === 'true');
    };

    return (
        <div className="display">
            <main className="container">
                <section>
                    <form className="form--login" onSubmit={handleRegister}>
                        <h1 className="text-4xl mt-7 mb-3">Magician Finder</h1>
                        <fieldset>
                            <label htmlFor="selectIsMagician">Register as a Magician?</label>
                            <select style={{ marginBottom: "15px" }} id="selectIsMagician"
                                value={isMagician} onChange={handleSelectChange}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <button type="submit" className="button p-3 rounded-md bg-blue-800 text-blue-100">
                                Submit
                            </button>
                        </fieldset>
                    </form>
                </section>
            </main>
        </div>
    );
};
