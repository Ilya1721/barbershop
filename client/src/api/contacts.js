import axios from "axios";

export const contacts_get = () => {
  return axios.get("/api/contacts");
};

export default { contacts_get };
