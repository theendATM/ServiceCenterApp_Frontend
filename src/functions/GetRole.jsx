import axios from "axios";

const GetRole = async () => {
  try {
    var results = await axios({
      method: "get",
      url: "https://localhost:7226/auth/roles",

      withCredentials: true,
    });
    console.log(results.data)
  } catch {}
  const role = "MainManager";
  return role;
};

export default GetRole;
