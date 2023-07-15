"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import  {toast}  from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        
    })

    const [loading, setLoading] = React.useState(false)
    const [buttonDisabled, setButtonDisabled] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("api/users/login", user)
            toast.success("Login succes")
            router.push("/profile")
        } catch (error:any) {
            console.log("Login failed", error.message)
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 ) {
            setButtonDisabled(true);
        }
    
    }, [user])

    return (
        <div>

            <h1>Login in</h1>
            <input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Enter email"/>
            <input id="password" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Choose password"/>
            
            <button onClick={onLogin}>Login</button>
            <Link href="/signup">Visit signup page</Link>
        </div>
    )
}