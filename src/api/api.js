import urlQueryParts from "../helpers/urlQueryParts";

const API_BASE_URL = "https://www.googleapis.com";
const API_BLOGS = "/blogger/v3/blogs";
const API_BLOG_ID = "/979277181691012230";
const API_KEY = "AIzaSyDkKqEGVmETJMqZXT9r53qQJSYbvK4d4Bk";

export const getPostsAPI = () =>
  API_BASE_URL +
  API_BLOGS +
  API_BLOG_ID +
  "/posts" +
  urlQueryParts({ key: API_KEY });
