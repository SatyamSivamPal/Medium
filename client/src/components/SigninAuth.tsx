import { useState } from "react"
import { AuthHeader } from "./AuthHeader"
import { CustomInput } from "./CustomInput"
import { signInSchema } from "@satyamx100/medium-common"
import { CustomButton } from "./CustomButton"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const SigninAuth = () => {
    const navigate = useNavigate();
    const [signinPost, setSigninPost] = useState<signInSchema>({
        email: "",
        password: ""
    })

    async function LoginRequest() {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signinPost);
            const name = res.data.user.name
            const jwt = res.data.token;
            localStorage.setItem("token", jwt);
            localStorage.setItem("name", name);
            navigate("/blogs")
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Credentials',
            })
        }

    }
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <AuthHeader label={"Access Account"} subLabel={"Don't have an account? "} to={"/signup"} tolabel="Sign up" />
            <CustomInput type={"text"} placeHolder={"Enter your email"} label={"Email"} onChange={(e) => {
                setSigninPost(c => ({
                    ...c,
                    email: e.target.value
                }))
            }} />
            <CustomInput type={"password"} placeHolder={"Password"} label={"Password"} onChange={(e) => {
                setSigninPost(c => ({
                    ...c,
                    password: e.target.value
                }))
            }} />
            <CustomButton label="Sign In" onClick={LoginRequest} />
        </div>
    )
}

export default SigninAuth