// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_BEARER_TOKEN = process.env.NEXT_PUBLIC_API_BEARER_TOKEN;

// const handler = async (req, res) => {
//   try {
//     if (req.method === "GET") {
//       console.log("API request triggered");
//       const response = await fetch(`${API_URL}/hoopsbot/random`, {
//         headers: new Headers({
//           Authorization: `bearer ${API_BEARER_TOKEN}`,
//         }),
//       })
//         .then((response) => response.json())
//         .catch((error) => {
//           throw new Error(error);
//         });
//       console.log("API response: ", response);
//       return res.status(200).json(response);
//     }

//     if (req.method === "PUT") {
//       const { id } = req.body;
//       const response = await axios.put(
//         `${API_URL}/hoopsbot/update/${id}`,
//         req.body,
//         {
//           headers: { Authorization: `bearer ${API_BEARER_TOKEN}` },
//         }
//       );

//       return res.status(200).json("Take updated!");
//     }
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.status);
//       console.log(error.response.data);
//     } else {
//       console.log(error.message);
//     }
//   }
// };

// export default handler;
