// import React, { useState } from 'react'
// import Child from './Child'

// const App = () => {
//   const[State,Setstate]=useState(true)

//   const PersonDetails={
//     name:'Ch. SaiDeepthi',
//     age:20,
//     location:'Hyderabad',
//     avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
//   }
//   function toggleBtn(){
//     Setstate(!State)
//   }

//   return(
//     <>
//     <button onClick={toggleBtn}>{State?"Show Card":"Hide Card"}</button>
//     {State && <Child user={PersonDetails}/>}
//     </>
//   )

// }

// export default App

import { useState } from "react";
import Child from "./Child";
import sdpink from "./assets/sdpink.jpeg"
function App() {
  const [State, Setstate] = useState(true);

  const PersonDetails = {
    name: "Ch. Sai Deepthi",
    age: 20,
    location: "Hyderabad",
    avatarUrl:sdpink,
  };

  function Tooglebtn() {
    Setstate(!State);
  }
 
  if(State==true){
    return(
      <div className="min-h-screen flex flex-col gap-y-4 items-center justify-center br-red-100">
           <div>
             {State && <Child personDetails={PersonDetails} />}
           </div>

           <div>
            <button onClick={Tooglebtn} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-blue-600">Hide Profile
           </button>
           </div>
      </div>

    )
  }
  else{
    return(
      <div className="h-screen flex items-center justify-center">
         <button onClick={Tooglebtn} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-blue-600">Show Profile</button>
      </div>
    )
  }
}

export default App;


 // return (
  //   // "h-screen flex items-center justify-center"
  //   // "min-h-screen flex items-center justify-center bg-gray-100"
  //   // "w-[400px] p-6 border border-blue-500 rounded-lg bg-white shadow"
  //   <div className="min-h-screen flex flex-col gap-y-4 items-center justify-center br-red-100">
  //     <div className="w-[280px] h-[400px] p-6 border border-blue-500 rounded-lg bg-white shadow flex items-center justify-center">
  //       {State && <Child personDetails={PersonDetails} />}
  //     </div>
  //     <div><button onClick={Tooglebtn} className="bg-blue-500">
  //       {State ? "Hide Profile" : "Show Profile"}
  //     </button></div>
  //   </div>
  // );
