import axios from "axios";

export const services_get = () => {
  return axios.get("/api/services");
};

export default { services_get };
