import { setSellerProducts, setProducts } from "../state/product.slice";
import {
  createProduct,
  getSellerProducts,
  getAllProducts,
  getProductById,
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
    
    disPatch(setProducts(data.products));
    
  }

  async function handleGetProductById(productId) {
    const data = await getProductById(productId);
    console.log(data);
    
    return data;
  }

  return { handleCreateProduct, handleGetSellerProduct, handleGetAllProduct, handleGetProductById };
};
