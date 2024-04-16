import { NextResponse } from "next/server";
import { Resend } from "resend";



const resend=new Resend(process.env.RESEND_API_KEY)
export async function POST(req){
    const response=await req.json();
    try{

        

        const data =  await resend.emails.send({
            from: 'DesiDhaba@desidhaba.com',
            to: 'user@gmail.com',
            subject: 'hello world',
            react: <Email url="https://example.com" />,
        });
        return NextResponse.json({})

    }catch(error){
        return NextResponse.json({error})
    }
}