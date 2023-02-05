import OrderItem from "../entity/order_item"
import OrderService from "./order.service";

describe("Product service unit tests", () => {
    it ("Should change the prices at all products", () => {
        const product1 = new OrderItem("product1", "Product 1", 10);
        const product2 = new OrderItem("product2", "Product 2", 20);
        const products = [product1, product2];

        OrderService.increasePrice(products, 100);

        expect(product1._price).toBe(20);
        expect(product2._price).toBe(40);
    })
})