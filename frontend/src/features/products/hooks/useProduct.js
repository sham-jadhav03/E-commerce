import { setSellerProducts, setProducts } from "../state/product.slice";
import {
  createProduct,
  getSellerProducts,
  getAllProducts,
} from "../services/product.api";
import { useDispatch } from "react-redux";

export const useProduct = () => {
  const disPatch = useDispatch();

  async function handleCreateProduct(formdata) {
    const data = await createProduct(formdata);
    return data.products;
  }

  async function handleGetSellerProduct() {
    const data = await getSellerProducts();
    disPatch(setSellerProducts(data.products));
    return data.products;
  }

  async function handleGetAllProduct() {
    const data = await getAllProducts();
    console.log(data);
    
    disPatch(setProducts(data.products));
    
  }

  return { handleCreateProduct, handleGetSellerProduct, handleGetAllProduct };
};
