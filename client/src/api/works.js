import axios from "axios";

export const works_get = async () => {
  const res = await axios.get("/api/works");

  return res.data;
};

export default { works_get };
