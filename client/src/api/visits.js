import axios from "axios";

export const visits_get = () => {
  return axios.get("/api/visits");
};

export const visits_post = (visit) => {
  return axios.post("/api/visits", visit);
};

export default { visits_get, visits_post };
