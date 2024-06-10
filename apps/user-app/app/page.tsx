import { Button } from "@repo/ui/button";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
const client=new PrismaClient();
export default async function Home() {

  const user=await client.user.create({
   data:{
    email:"Aman@gmail.com",
    name:"aman kejriwal"
   }
  })
  return (
    <div className="text-2xl">
      HI There
    </div>
  )
} 