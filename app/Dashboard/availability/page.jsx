"use client";
import React, { useState } from "react";
import DayList from "@/app/_utils/DayList";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "@/config/firebase";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";

function Availability() {
  const [dayAvailable, setDayAvailable] = useState([]);
  const [startTime,setStartTime] = useState();
  const [endTime,setEndTime] = useState();
  const db = getFirestore(app);
  const {user} = useKindeBrowserClient();

  const handleSave = async () => {
    console.log(dayAvailable,startTime,endTime);
    const docRef=doc(db,'Business',user?.email);
    await updateDoc(docRef, {
      dayAvailable: dayAvailable,
      startTime: startTime,
      endTime: endTime
    }).then(resp=>{
      toast('Change Updated! ')
    })
  }

  const onHandleChange=(day,value)=>{
    setDayAvailable({
      ...dayAvailable,
      [day]:value
    })
  }
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Availability</h2>
      <hr className="my-7"></hr>
      <div>
        <h2 className="font-bold">Availability Days</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-3">
          {DayList.map((items, index) => (
            <div key={index}>
              <h2>
                <Checkbox 
                onCheckedChange={(e)=>onHandleChange(items.day,e)}
                />
                {items.day}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold mt-10">Availability Time</h2>
        <div className="flex gap-10">
          <div className="mt-3">
            <h2>Start Time</h2>
            <Input className="cursor-pointer" type="time" onChange={(e)=>setStartTime(e.target.value)}/>
          </div>

          <div className="mt-3 ">
            <h2>End Time</h2>
            <Input className="cursor-pointer" type="time" onChange={(e)=>setEndTime(e.target.value)}/>
          </div>
        </div>
      </div>
      <Button className="mt-10" onClick={handleSave}>Save</Button>
    </div>
  );
}

export default Availability;
