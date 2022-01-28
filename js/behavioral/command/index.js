import { OrderManager } from './OrderManager';
import { PlaceOrderCommand } from './PlaceOrderCommand';
import { TrackOrderCommand } from './TrackOrderCommand';
import { CancelOrderCommand } from './CancelOrderCommand';

const manager = new OrderManager();

manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
