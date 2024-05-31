import axios from "axios";

const API_KEY = "IBl9vq3xGxkJ6VtwLlkDtCBI-G8aE2lghdIxtwr96cY";

axios.defaults.baseURL = "https://api.unsplash.com/search/";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("photos/", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
