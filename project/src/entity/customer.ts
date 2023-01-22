class Customer {
    _id: string;
    _name: string;
    _address: string;

    constructor(
        id: string,
        name: string,
        address: string
    ) {
        this._id = id;
        this._name = name;
        this._address = address;
    }

    // anemic entity
    get id(): string {
        return this._id;
    }

    // expressivity/business rules
    changeName(name: string) {
        this._name = name;
    }
}