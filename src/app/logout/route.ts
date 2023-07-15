// Clear out the token 

import { NextResponse } from "next/server";
//New comment here
export async function GET() {
    try {
        const response =  NextResponse.json(
            {
                mesage: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("token", "",
        {   httpOnly: true, 
            expires: new Date(0)
        });
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message },
           {status: 500 });
    }
}