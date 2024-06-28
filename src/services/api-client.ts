import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b237d1d7b1e74543a3123d73d25cbfe0",
  },
});
