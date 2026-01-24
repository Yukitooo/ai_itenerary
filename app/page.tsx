import Image from "next/image";

const hello: string = " HELLLO"


export default function Home() {

  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      This is YUKIS AND NICOLES PROJECT
      {hello}
    </div>
  );
}


