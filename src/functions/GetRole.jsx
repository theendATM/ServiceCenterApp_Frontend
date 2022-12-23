import axios from "axios";

const GetRole = async () => {
  try {
    var results = await axios({
      method: "get",
      url: "https://localhost:7226/auth/roles",

      withCredentials: true,
    });

    if (results.data.length > 0) return results.data[0];
    else return null;
  } catch {return null}
};

export default GetRole;
