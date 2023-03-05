import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <button>hello world</button>
      <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
    </div>
  );
}
