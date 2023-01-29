import Order from "./entity/order";
import OrderItem from "./entity/order_item";
import Customer from './entity/customer';
import { Address } from "./valueObject/address";

const customer = new Customer("9bceb3eb-a699-4113-8ad8-6c9604ef3a43", "Rfontt");
const address = new Address("Street 2", 2, "12345-000", "SP");

customer._address = address;

const notebook = new OrderItem("f0392776-58e7-4a48-9876-a15bfd3cd5c8", "notebook", 1000.00);

const celphone = new OrderItem("c2e6271d-a32d-4400-a81c-dcda04408002", "celphone", 2000.00);

const keyboard = new OrderItem("0b5504d3-b43b-420d-bb76-5bc8cac0ac37", "keyboard", 500.00);

const orderItem: OrderItem[] = [notebook, celphone, keyboard];

const order = new Order("be1b5b4b-fd0a-4bd2-83a7-f9736a65c71c", customer._id, orderItem);