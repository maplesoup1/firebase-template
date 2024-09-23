"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { app } from "@/config/firebase";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const CreateBusiness = () => {
  const [businessName, setBusinessName] = useState<string>("");
  const db = getFirestore(app);
  const {user} = useKindeBrowserClient();
  const router = useRouter();
  const onCreateBusiness = async () => {
    console.log("button Click!");
    await setDoc(doc(db, "Business", user?.email ?? ""), {
        businessName: businessName,
        createdBy: user?.email ?? "",
        userName: `${user?.given_name ?? ""} ${user?.family_name ?? ""}`
      }).then(resp=>{
        console.log("Document Saved!");
        toast('New Business Created!');
        router.push('/dashboard');
      })
  };
  return (
    <div className="p-14 items-center flex flex-col gap-20 my-10">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="flex flex-col items-center gap-4 max-w-3xl">
        <h2 className="text-4xl font-bold">Waht should we call your </h2>
        <p className="text-slate-400">
          You can always change this later from setting
        </p>
        <div className="w-full">
          <label className="text-slate-400">Team Name</label>
          <Input
            placeholder="Hello"
            className="mt-2"
            value={businessName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setBusinessName(event.target.value)
            }
          />
        </div>
        <Button className="w-full" 
        disabled={!businessName.trim()}
        onClick={onCreateBusiness}
        >Create Business
        </Button>
      </div>
    </div>
  );
};

export default CreateBusiness;
