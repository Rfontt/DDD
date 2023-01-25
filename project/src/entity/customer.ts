import { Address } from "../valueObject/address";

export class Customer {
    _id: string;
    _name: string;
    _address!: Address;

    constructor(
        id: string,
        name: string,
    ) {
        this._id = id;
        this._name = name;

        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required");
        }

        if (this._name === "") {
            throw new Error("Name is required");
        }

        if (this._address === undefined) {
            throw new Error("Address is required");
        }
    }

    // anemic entity
    get id(): string {
        return this._id;
    }

    // expressivity/business rules
    changeName(name: string) {
        this._name = name;
    }

    set Address(address: Address) {
        this._address = address;
    }
}