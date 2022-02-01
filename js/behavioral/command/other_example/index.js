import { OrderManager } from 'js/behavioral/command/other_example/OrderManager';
import { PlaceOrderCommand } from 'js/behavioral/command/other_example/PlaceOrderCommand';
import { TrackOrderCommand } from 'js/behavioral/command/other_example/TrackOrderCommand';
import { CancelOrderCommand } from 'js/behavioral/command/other_example/CancelOrderCommand';

const manager = new OrderManager();

manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
