import axios from "axios";

export const barbers_get = async () => {
  const res = await axios.get("/api/barbers");

  return res.data;
};

export default { barbers_get };
