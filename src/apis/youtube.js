import axios from "axios";

const KEY = "AIzaSyDO5UzoMYrSqfA0_yu1M4OpAkA_tU30u9I"; //writing KEY in capital letters because we identify it as constant

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
