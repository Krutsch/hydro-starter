import * as Comlink from "comlink";
import { worker } from "./@types";

const worker = new Worker("workerCode.js"); // { type: "module" }, if module worker are supported in Firefox and Safari
const comlinkWorker = Comlink.wrap(worker) as worker;
export default comlinkWorker;
