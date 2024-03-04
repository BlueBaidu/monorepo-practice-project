import { myCall } from "./this_call/my_call.js"
export const init = () => Function.prototype.myCall = myCall
