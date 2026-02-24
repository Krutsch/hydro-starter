import * as Comlink from "comlink";
import type { worker as WorkerAPI } from "../@types";

const worker = new Worker("/@shared/workerCode.js", {
  type: "module",
});
const comlinkWorker = Comlink.wrap(worker) as WorkerAPI;
export default comlinkWorker;
