import { Customer } from './Customer';

export function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function () {
    const customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;

    return customer;
  };
}
