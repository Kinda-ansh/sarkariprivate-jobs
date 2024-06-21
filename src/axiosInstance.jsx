import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.sarkariprivatejobs.in/api/v1",
});
// https://msmev2.navoditfinserv.in/index.php/api
export default instance;    