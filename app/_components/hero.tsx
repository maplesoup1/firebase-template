import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const hero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src="/profile1.png"
          alt="profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-36"
        />

        <Image
          src="/profile2.png"
          alt="profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute top-48 left-16"
        />

        <Image
          src="/profile3.png"
          alt="profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36"
        />

        <Image
          src="/profile4.png"
          alt="profile"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-16 bottom-32"
        />
      </div>

      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-400">
          Schedulu is your scheduling
        </h2>
        <div className="flex gap-4 flex-col mt-5">
          <h3 className="text-sm">Sign up free with Google and Facebook</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Button className="p-7 flex gap-4">
              <Image src="/google.png" alt="google" width={30} height={30} />
              Sign up with Google
            </Button>
            <Button className="p-7 flex gap-4">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={30}
                height={30}
              />
              Sign up with Facebook
            </Button>
          </div>
          <hr></hr>
          <h2>
            <Link className="text-blue-400" href="">
              Sign up Free with Email.
            </Link>{" "}
            No further charge!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default hero;
