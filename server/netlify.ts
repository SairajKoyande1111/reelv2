import serverless from "serverless-http";
// @ts-ignore
import app from "./index.js";

export const handler = serverless(app);
export default app;
