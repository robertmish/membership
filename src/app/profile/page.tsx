"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import style from '../page.module.css';

export default function ProfilePage() {

    const router = useRouter()
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/tokenData/')
        console.log(res);
        setData(res.data);
    }

    
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout successfull")
            router.push("/login")

        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }


    return (
        <div>

            <h1>My profile</h1>
            <button className={style.logout_btn} onClick={getUserDetails}>Get user details</button>
            <p>Username {data === 'nothing' ? "Nothing" : <Link href={`/profileid/${data}`}>{data}</Link>}</p>
            <button className={style.logout_btn} onClick={logout}>Logout</button>

        </div>
    )
}