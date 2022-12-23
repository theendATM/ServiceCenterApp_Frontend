import axios from "axios";

const GetRole = async () => {
  try {
    var results = await axios({
      method: "get",
      url: "https://localhost:7226/user/roles",

       withCredentials: true,
     });

     console.log(results.data[0])
     if (results.data.length > 0) return "MainManager";
     else return null;
   } catch {return null}

  return "MainManager"
};

export default GetRole;
