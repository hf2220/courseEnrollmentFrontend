import axios from "axios";
import {TOKEN_NAME} from "../constant";
import cookies from "react-cookies";

const token = cookies.load(TOKEN_NAME)
export default axios.create(
    {
        baseURL: "http://.us-west-2.elb.amazonaws.com:8080",
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    }
);