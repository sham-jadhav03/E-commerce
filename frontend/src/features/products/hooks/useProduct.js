import { setSellerProducts } from "../state/product.slice";
import { createProduct, getProducts } from "../services/product.api";
import { useDispatch } from "react-redux";

export const useProduct = () => {
  const disPatch = useDispatch();

  async function handleCreateProduct(formdata) {
    const data = await createProduct(formdata);
    return data.products;
  }

  async function handleGetSellerProduct() {
    const data = await getProducts();
    disPatch(setSellerProducts(data.products));
    return data.products;
  }

  return { handleCreateProduct, handleGetSellerProduct };
};
