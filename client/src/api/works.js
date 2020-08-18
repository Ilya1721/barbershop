import axios from "axios";

export const works_get = () => {
  return axios.get("/api/works");
};

export default { works_get };
