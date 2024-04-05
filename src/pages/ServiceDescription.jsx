import React, { useEffect, useState } from 'react';
import Description from "../Json/Services.json";
import { useParams } from 'react-router-dom';

const ServiceDescription = () => {
  const [text, setText] = useState( Description); // Initialize with empty array
const {id} = useParams();
console.log(text);
//   useEffect(() => {
//     fetch("/src/Json/Services.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setText(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  const result = text.filter((item) => item.id === id); // Use 'item' for clarity
console.log(result)
  return (
    <div>
        {id}
      {/* {result.length > 0 ? (
        result.map((item) => <p key={item.id}>{item.text}</p>) // Use key for uniqueness
      ) : (
        <p>No data found with the given ID.</p>
      )} */}
    </div>
  );
};

export default ServiceDescription;
