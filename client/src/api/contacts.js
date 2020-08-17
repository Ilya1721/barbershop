import axios from "axios";

export const contacts_get = async () => {
  const res = await axios.get("/api/contacts");

  return res.data;
};

export default { contacts_get };
