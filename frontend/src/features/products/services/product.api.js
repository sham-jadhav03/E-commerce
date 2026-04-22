import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const createProduct = async (formData) => {
  const response = await api.post("/api/products/", formData);

  return response.data;
};

export const getProducts = async () => {
  const response = await api.get("/api/products/seller");

  return response.data;
};
