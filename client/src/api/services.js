import axios from "axios";

export const services_get = async () => {
  const res = await axios.get("/api/services");
  console.log(res.data);

  return res.data;
};

export default { services_get };
