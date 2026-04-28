import { setSellerProducts, setProducts } from "../state/product.slice";
import {
  createProduct,
  getSellerProducts,
  getAllProducts,
  getProductById,
  addProductVariant,
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
    
    return data;
  }

  async function handleAddProductVariant(productId, newProductVariant) {

    const data = await addProductVariant(productId, newProductVariant)

    return data.products;
  }

  return { handleCreateProduct, handleGetSellerProduct, handleGetAllProduct, handleGetProductById, handleAddProductVariant };
};
