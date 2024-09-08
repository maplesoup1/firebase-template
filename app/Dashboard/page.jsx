"use client";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/config/firebase";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [loading,setLoading] = useState(true)
  const router = useRouter();

  useEffect(()=> {
    user&&isBusinessRegistered();
  },[user])

  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user?.email);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
      router.push('/Create-business');
    }
  
  }

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      Dashboard
      <LogoutLink>
        <Button>Logout</Button>
      </LogoutLink>
    </div>
  );
};

export default Dashboard;
