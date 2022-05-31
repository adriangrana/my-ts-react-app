import { useEffect, useState } from "react";
import productClient from "../clients/product.client";

const useProducts = (initValue: []) => {
    const [products, setProducts] = useState<any>(initValue);
    const [details, setDetails] = useState<any>(null);
    
    useEffect(() => {
      const getProducts = async () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.json())
          .then((dat) => {
            setProducts(dat.slice(0, 10));
          });
      };
      getProducts();
    }, []);
    
    const onClickHandler = (e: any) => {
      productClient.get(`/todos/${e.id}`, {}).then((res: any) => {
        setDetails(res.data);
      });
    };
    

  return { products, getDetails: onClickHandler, details };
};
export default useProducts;