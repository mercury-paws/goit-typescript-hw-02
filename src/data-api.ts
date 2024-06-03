import axios, { AxiosResponse } from "axios";
import { RefObject } from "react";

const API_KEY: string = "IBl9vq3xGxkJ6VtwLlkDtCBI-G8aE2lghdIxtwr96cY";

axios.defaults.baseURL = "https://api.unsplash.com/search/";

interface Data {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: {
    bio: string;
    location: string;
    total_photos: number;
  };
}
export const fetchImages = async (
  searchQuery: string,
  currentPage: number
): Promise<Data[]> => {
  const response: AxiosResponse = await axios.get("photos/", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15 as const,
      orientation: "landscape" as const,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
