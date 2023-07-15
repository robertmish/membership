"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import  {toast}  from "react-hot-toast";
import  bcryptjs from "bcryptjs";


export default function SignupPage() {



    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {

        try {
            setLoading(true);
            const response = await axios.post("api/users/signup", user)
            console.log("Signup success", response.data)
            router.push("/profile")

        } catch (error:any) {

           toast.error(error.message);

        } finally {

            setLoading(false)
        }
    }

useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
        setButtonDisabled(true);
    }

}, [user])


    return (
        <div>

            <h1>{loading ? "Processing" : "Sign up"}</h1>
            <input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Enter email"/><br></br>
            <input id="password" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Choose password"/><br></br>
            <input id="username" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="Username"/><br></br>
            <button onClick={onSignup}>Signup</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}