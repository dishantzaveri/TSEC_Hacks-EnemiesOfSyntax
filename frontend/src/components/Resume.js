import axios from "axios";
import { useSelector } from "react-redux";

export default function Resume() {
  const { token } = useSelector((state) => state.auth);

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "localhost:8000/account/resume",
    headers: {
      Authorization: `Token ${token} `,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  <div></div>;
}
