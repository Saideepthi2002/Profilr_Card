// import React from 'react'

// const Child = () => {
//   return (
//     <div>Child</div>
//   )
// }

// export default Child

// w-64 h-64 flex items-center justify-center bg-gray-200
// 'h-30 w-75 bg-blue-500'

{
  /* <div>
<div className="h-[125px] bg-gradient-to-b from-[#91baff] to-[#205fff] rounded-t-md"></div>
<div className='hb-50 flex items-center justify-center'>
<img src={props.personDetails.avatarUrl} alt='user' className='w-32 h-32 rounded-full border-4 border-blue-500 object-cover'/>
</div>
 <p className='font-bold text-center'>Name: {props.personDetails.name}</p>
 <p className='text-center'><span className='font-bold'>Age:</span> {props.personDetails.age}</p>
 <p className='text-center'><span className='font-bold'>Loation:</span> {props.personDetails.location}</p>
</div> */
}

import React from "react";
import "./Child.css";

const Child = (props) => {
  return (
    <div className="ug">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={props.personDetails.avatarUrl} alt="person" />
        <div className="profile-title pro"><span className="font-bold pro">Name:</span> {props.personDetails.name}</div>
        <div className="profile-detail pro">
          <span className="font-bold pro">Age:</span> {props.personDetails.age}
        </div>
        <div className="profile-location pro">
          <span className="font-bold pro">Loation:</span>{" "}
          {props.personDetails.location}
        </div>
      </div>
      <div className="gradient2"></div>
    </div>
  );
};

export default Child;
