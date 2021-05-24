import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import mask from '../helpers/PhoneMask'
import 'bootstrap'

export const RegistrationPage = () =>{
    const history = useHistory()

    useEffect(() => {
        mask("phone")
    })

    const cl = () => {
        console.log("click")
        history.push("/")
    }
   
    return (
        <div className="container">
            <form id="registr">
                <div className= "row">
                    <div className= "col">
                        <p>Register</p>
                    </div>
                </div>
                
                <div className= "row">
                    <div className= "col">
               <input 
                    label= "Name:"
                    type= "text"/>
                    </div>
                    
                <div className= "row">
                    <input className= ""
                        label= "Surname:"
                        className= "surname col" 
                        type= "text"/>
                </div>
                <div className= "row">
                <input
                    label= "Middlename:"
                    className= "mclassNamedlename col" 
                    type= "text"/>
                    </div>
                    <div className= "row">
                <input
                    label= "Email:"
                    className= "email col" 
                    type= "email"/>
                    </div>
                    <div className= "row">
                <input
                    label= "Phone:"
                    className= "phone col" 
                    type= "tel"/>
                    </div>
                    <div className= "row">
                <input
                    label= "Password:"
                    className= "passsword" 
                    type= "password"/>
                    </div>
                    <div className= "row">
                <input
                    label= "Repeat password:"
                    className= "retrypassword" 
                    type= "password"/>
                     </div>
            <button type= "submit" value="submit">Registr</button>
            </div>
            </form>
           
        </div>
    )
}