import axios from "axios";

export const barbers_get = () => {
  return axios.get("/api/barbers");
};

export default { barbers_get };
