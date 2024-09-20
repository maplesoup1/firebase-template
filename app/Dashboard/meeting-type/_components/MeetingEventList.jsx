"use client";
import React, { useEffect, useState } from "react";
import { app } from "@/config/firebase";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Clock, Copy, MapPin, Pen, Settings, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MeetingEventList = () => {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    user && getEventList();
  }, [user]);

  const getEventList = async () => {
    setEventList([]);
    const q = query(
      collection(db, "MeetingEvent"),
      where("createBy", "==", user?.email),
      orderBy("id", "desc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setEventList((prevEvent) => [...prevEvent, doc.data()]);
    });
  };
  const onDeleteMeeting = async (event) => {
    await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp=>{});
    toast('Event deleted!');
    getEventList();
  }

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
      {eventList.length > 0 ? (
        eventList?.map((event, index) => (
          <div
            key={index}
            className="borader shadow-md border-t-8 rounded-lg p-5 flex flex-col gap-3"
            style={{ borderTopColor: event?.themeColor }}
          >
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Settings className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex gap-2"><Pen/>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-2"
                  onClick={()=>onDeleteMeeting(event)}
                  ><Trash/>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h2 className="font-medium text-lg">{event?.eventName}</h2>
            <div className="flex justify-between">
              <h2 className="flex gap-2 text-gray-500">
                <Clock />
                {event.duration} Mins
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <MapPin />
                {event.duration} Mins
              </h2>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <h2
                className="flex gap-2 text-sm items-center cursor-pointer text-blue-500"
                onClick={() => {
                  navigator.clipboard.writeText(event.locationUrl);
                  toast("Url already copyed");
                }}
              >
                <Copy className="h-4 w-4" />
                Copy Link
              </h2>
              <Button
                variant="outline"
                className="rounded-full border-blue-500"
              >
                Share
              </Button>
            </div>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default MeetingEventList;
