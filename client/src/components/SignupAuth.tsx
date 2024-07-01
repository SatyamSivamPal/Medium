import { useState } from "react"
import { AuthHeader } from "./AuthHeader"
import { CustomInput } from "./CustomInput"
import { signUpSchema } from "@satyamx100/medium-common"
import { CustomButton } from "./CustomButton"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2"

export const SignupAuth = () => {
    const [signupPost, setSignupPost] = useState<signUpSchema>({
        name:"",
        email:"",
        password:"",
    })

    const navigate = useNavigate();

    async function sendRequest () {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupPost);
            const jwt = res.data.token;
            const name = res.data.user.name
            localStorage.setItem("token", jwt);
            localStorage.setItem("name", name);
            navigate('/blogs')
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Input is not valid',
            })
        }
       
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <AuthHeader label={"Create an Account"} subLabel={"Already have an account?"} to={"/signin"} tolabel={"Login"}/>
            <CustomInput type = {"text"} placeHolder = {"Enter your username"} label={"Username"} onChange = {(e) => {
                setSignupPost(c => ({
                    ...c,
                    name: e.target.value
                }))
            }}/>
            <CustomInput type = {"text"} placeHolder = {"Enter your email"} label={"Email"} onChange = {(e) => {
                setSignupPost(c => ({
                    ...c,
                    email: e.target.value
                }))
            }}/>
             <CustomInput type = {"password"} placeHolder = {"Password"} label={"Password"} onChange = {(e) => {
                setSignupPost(c => ({
                    ...c,
                    password: e.target.value
                }))
            }}/>
            <CustomButton label="Sign Up" onClick={sendRequest}/>                    
        </div>
    )
}