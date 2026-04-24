import axios from "axios";

const api = axios.create({
  baseURL: "/api/products",
  withCredentials: true,
});

export const createProduct = async (formData) => {
  const response = await api.post("/", formData);

  return response.data;
};

export const getSellerProducts = async () => {
  const response = await api.get("/seller");

  return response.data;
};

export const getAllProducts = async () => {
  const response = await api.get("/");

  return response.data;
};

export const getProductById = async (productId) => {
  const response = await api.get(`/detail/${productId}`)
  return response.data;
}

export const addProductVariant = async (productId, newProductVariant) => {


  const formData = new FormData();

  //append variant data 
  newProductVariant.images.forEach((image) => {
    formData.append("images", image.file)
  })

  formData.append("stock", newProductVariant.stock)
  formData.append("priceAmount", newProductVariant.price)
  formData.append("attributes", JSON.stringify(newProductVariant.attributes))


  const response = await api.post(`/${productId}/variants`, formData)

  return response.data;

}
