import { myCall } from "./call/my_call.js";
export const init = () => (Function.prototype.myCall = myCall);
