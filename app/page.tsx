import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./_components/header";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Button variant="destructive">Hello</Button>
      <Header/>
    </div>
  );
}
