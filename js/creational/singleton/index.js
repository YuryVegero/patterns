import { singletonCounter } from './singletonClass';
import { counter } from './singletonObject';


/* Class based singleton */
console.log(singletonCounter.getCount());
singletonCounter.increment();
console.log(singletonCounter.getCount());

/* Object based singleton */
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
