'use client'
import React, { useState } from "react";
import MeetingForm from "./_components/MeetingForm";
import PreviewMeeting from './_components/PreviewMeeting'

const CreateMeeting = () => {
  const [formValue,setFormValue]=useState();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Meeting form */}
      <div className="shadow-md border h-screen">
        <MeetingForm setFormValue={(value)=>console.log(value)||setFormValue(value)}/>
      </div>
      {/* previre */}
      <div className="md:col-span-2">
        <PreviewMeeting formValue={formValue}/>
      </div>
    </div>
  );
};

export default CreateMeeting;
