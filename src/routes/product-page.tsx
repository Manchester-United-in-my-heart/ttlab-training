import { Product } from '../components/ProductList';
import ProductList from '../components/ProductList';
type ProductPageProps = {
  productList: Product[];
};
export default function ProductPage(props: ProductPageProps) {
  const { productList } = props;
  return <ProductList products={productList} />;
}
