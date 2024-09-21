import * as Comlink from "comlink";
import { worker } from "../@types";

const worker = new Worker(
  new URL(import.meta.url).origin + "/@shared/workerCode.js",
  { type: "module" },
);
const comlinkWorker = Comlink.wrap(worker) as worker;
export default comlinkWorker;
