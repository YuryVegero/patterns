import { Customer } from './Customer';
import { CustomerPrototype } from './CustomerPrototype';

const proto = new Customer("n/a", "n/a", "pending");
const prototype = new CustomerPrototype(proto);

const customer = prototype.clone();
customer.say();
