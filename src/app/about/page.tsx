import Navbar from "../components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-row flex-wrap items-center justify-center min-h-[calc(100vh-4rem)] gap-8 p-4">
        <Card title="Komponen 1" description="Ini adalah komponen pertama" />
        <Card title="Komponen 2" description="Ini adalah komponen kedua" />
      </div>
    </>
  );
}