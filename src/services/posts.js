import request from "axios";
import { getPostsAPI } from "../api/api";

export const getPosts = async () => await request(getPostsAPI());
