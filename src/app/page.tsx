import GridItem from "@/components/sections/GridItem";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
  <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className=" max-w-7xl w-full space-y-4">
      <Hero/>
      <GridItem/>
    </div>
  </main>
  );
}
