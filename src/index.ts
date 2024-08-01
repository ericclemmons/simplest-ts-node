import { scheduler } from "node:timers/promises";

enum Status {
  SUCCESS = "SUCCESS!",
  ERROR = "Oops!",
}

let count = 0;

do {
  console.info(`✅ ${Status.SUCCESS} x${++count}`);
  await scheduler.wait(1000);
} while (true);
