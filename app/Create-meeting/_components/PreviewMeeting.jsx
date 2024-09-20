import React from "react";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

const PreviewMeeting = ({ formValue }) => {
  return (
    <div className="p-5 py-10 shadow-lg m-5 border-t-8">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
      {/* Meeting info */}
      <div className="p-4 border-r">
          <h2>Business Name</h2>
          <h2
          className="font-bold"
          >{formValue?.eventName ? formValue?.eventName: 'Meeting Name'}</h2>
          <div className="mt-5 flex flex-col gap-4">
            <h2 className="flex gap-2"><Clock/>{formValue?.duration} Mins</h2>
            <h2 className="flex gap-2"><MapPin/>{formValue?.location}</h2>
            <Link href={formValue?.locationUrl} className='text-blue-800'>{formValue?.locationUrl}</Link>
          </div>
      </div>
      {/* Time and Data selection */}
      <div className="md:col-span-2">

      </div>
      </div>
    </div>
  );
};

export default PreviewMeeting;
