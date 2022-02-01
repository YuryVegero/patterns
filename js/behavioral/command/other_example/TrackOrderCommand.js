import { Command } from 'js/behavioral/command/other_example/Command';

export function TrackOrderCommand(id) {
  return new Command(() =>
    console.log(`Your order ${id} will arrive in 20 minutes.`)
  );
}
