"use client";

export default function UserProfile({params}: any) {
    
    return (
        <div>

            <h1>Profile page</h1>
            <p>Profile id is {params.id}</p>
        </div>
    )
}