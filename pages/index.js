import { useState } from "react";

export default function Home({times}) {

  const [time1, setTime1] = useState()
  const [time2, setTime2] = useState()


  function timeHandler (availability){
    const startingTimehour = availability[0].hour;
    const colseingTimehour = availability[1].hour;

    setTime1(startingTimehour);
    setTime2(colseingTimehour);
      
    
  }
  
    return (
      <>
        <div className="max-w-7xl mx-auto my-8">
        <h1 className="text-4xl font-semibold"><a className="text-4xl font-semibold underline decoration-green-600">Bo</a><a className="text-4xl font-semibold underline decoration-red-600">ok</a> Demo Session Slot</h1>
        <h2 className="text-2xl font-semibold my-4">Select Date</h2>
        <div className="flex my-3">
        {
            times.map((time) => {
              return (
                    <div onClick={()=>timeHandler(time.available)} className="w-16 h-24 border-2 rounded-md border-blue-800 mx-2 cursor-pointer" key={time.date}>
                      <h1 className="text-center ">{Date().slice(0,3)}</h1>
                      <h1 className="text-center ">{time.date.slice(8,10)}</h1>
                      <h1 className="text-center ">{parseInt(time.date.slice(6,7))}</h1>
                    </div>  
              );
            })
          }
        </div>
        <h2 className="text-2xl font-semibold my-4">Select Slot</h2>
        <div className="flex my-5">
          <div className="w-24 h-10 border-2 rounded-md border-blue-800 mx-1 bg-green-500">
            <p className="text-white text-lg ">{time1}PM</p>
          </div>
          <div className="w-24 h-10 border-2 rounded-md border-blue-800 mx-1 bg-green-500">
            <p className="text-white text-lg ">{time2}PM</p>
          </div>
        </div>
        </div>
      </>
    );

}

export async function getStaticProps() {
  const response = await fetch(
    "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
  );

  const data = await response.json();

  return {
    props: {
      times: data,
      
    },
  };
}
