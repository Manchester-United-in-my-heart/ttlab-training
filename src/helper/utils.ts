import { User } from '../components/UserList'
import { Product } from '../components/ProductList'
export const searchUser = (users: User[], query: string) => {
  if (!query || query === "") return users;
  return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase())) ;
}

export const searchProduct = (products: Product[], query: string) => {
  if (!query || query === "") return products;
  return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase())) ;
}
