import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MeetingForm = () => {
  return (
    <div className="p-4">
      <h2 className="flex gap-2">
        <ChevronLeft />
        Cancel
      </h2>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event</h2>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input placeholder="Name of your meeting" />
        <h2>Duration *</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              30 min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>15 min</DropdownMenuItem>
            <DropdownMenuItem>30 min</DropdownMenuItem>
            <DropdownMenuItem>45 min</DropdownMenuItem>
            <DropdownMenuItem>60 min</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MeetingForm;
