"use client";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LocationOption from "@/app/_utils/LocationOption";
import Link from "next/link";
import ThemeOptions from "@/app/_utils/ThemeOptions";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MeetingForm = ({setFormValue}) => {
  const [location, setLocation] = useState();
  const [themeColor, setThemeColor] = useState();
  const [eventName, setEventName] = useState();
  const [duration, setDuration] = useState(30);
  const [locationUrl, setLocationUrl] = useState();

  useEffect(()=>{
    setFormValue({
      eventName:eventName,
      duration:duration,
      locationUrl:locationUrl,
      location:location,
      themeColor:themeColor
    })
  }),[eventName,duration,location,locationUrl]

  return (
    <div className="p-6">
      <Link href={"/dashboard"}>
        <h2 className="flex gap-2 ">
          <ChevronLeft className="cursor-pointer hover:text-opacity-50" />
          Cancel
        </h2>
      </Link>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event</h2>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input placeholder="Name of your meeting" 
        onChange={(event)=>setEventName(event.target.value)}
        />
        <h2 className="font-bold">Duration *</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              {duration} Mins
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={()=>setDuration(15)}>15 min</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setDuration(30)}>30 min</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setDuration(45)}>45 min</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setDuration(60)}>60 min</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="font-bold"></h2>
        <div className="grid grid-cols-4 gap-3">
          {LocationOption.map((option, index) => (
            <div
              key={option.name || index}
              className={`border flex flex-col justify-center items-center p-3 rounded-lg hover:bg-blue-100 hover:border-primary cursor-pointer
              ${location === option.name && "bg-blue-100 border-primary"}`}
              onClick={() => setLocation(option.name)}
            >
              <Image
                src={option.icon}
                width={30}
                height={30}
                alt={option.name}
              />
              <h2>{option.name}</h2>
            </div>
          ))}
        </div>
        {location && (
          <>
            <h2 className="font-bold">Add {location} Url</h2>
            <Input placeholder="Add Url" 
            onChange={(event)=>setLocationUrl(event.target.value)}
            />
          </>
        )}
      </div>

      <h2 className="font-bold">Select Theme color</h2>
      <div className="flex justify-evenly mt-4">
        {ThemeOptions.map((items, index) => (
          <div
            className={`h-7 w-7 rounded-full cursor-pointer hover:bg-opacity-30
        ${themeColor === items && "border-balck border-4 scale-125"}
        `}
            style={{ backgroundColor: items }}
            onClick={() => setThemeColor(items)}
          ></div>
        ))}
      </div>

      <Button
        className="w-full mt-9"
        disabled={(!eventName || !duration || !location || !locationUrl)}
      >
        Create
      </Button>
    </div>
  );
};

export default MeetingForm;
