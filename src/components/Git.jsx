// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// function Git() {
//   const data = useLoaderData();
//   // const [data, setdata] = useState("");
//   // useEffect(() => {
//   //   fetch("https://api.github.com/users/hiteshchoudhary")
//   //     .then((res) => res.json())
//   //     .then((data) => setdata(data));
//   // }, []);

//   return (
//     <div>
//       <h1>{data.followers}</h1>
//       <h1>{data.bio}</h1>
//       <img src="{data.avatar_url} " alt="" className="w-20 h-20" />
//       <h1>{data.name}</h1>
//       console.log({data.name});
//     </div>
//   );
// }

// export default Git;
// export const gitloder = async () => {
//   const res = await fetch(`https://api.github.com/users/akhilesh-bisht`).catch(
//     (err) => {
//       alert("this is alert");
//     }
//   );
//   return res.json();
// };
