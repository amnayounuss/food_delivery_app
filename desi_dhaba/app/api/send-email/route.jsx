import { Email } from "@/emails";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";
import { Resend } from "resend";



const resend=new Resend(process.env.RESEND_API_KEY);    
export async function POST(req){
    const response=await req.json(data);        
    try{
        const data =  await resend.emails.send({
            from: 'DesiDhaba@desidhaba.com',
            to: [response.email],
            subject: 'Desi Dhaba Confirmation Order',
            react:Email(),
        });
        return NextResponse.json({data})

    }catch(error){
        return NextResponse.json({error})
    }
}