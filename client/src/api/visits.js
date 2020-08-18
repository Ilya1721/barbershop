import axios from "axios";

export const visits_get = () => {
  return axios.get("/api/visits");
};

export default { visits_get };
