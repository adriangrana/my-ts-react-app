import RestApi from "../api/Axios";


class ProductService extends RestApi {

    constructor() {
        super("https://jsonplaceholder.typicode.com");
    }

    getProducts() {
        return this.get("products", {});
    }

    getProduct(id: string) {
        return this.get("products/" + id, {});
    }

    createProduct(data: any) {
        return this.post("products", data, {});
    }

    updateProduct(id: string, data: any) {
        return this.put("products/" + id, data, {});
    }

    deleteProduct(id: string) {
        return this.delete("products/" + id, {});
    }

}

export default new ProductService();