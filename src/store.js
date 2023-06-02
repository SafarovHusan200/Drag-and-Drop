import { init } from "@rematch/core";
import { count } from "./models/count";
import { user } from "./models/user";
import selectPlugin from "@rematch/select";

const store = init({ models: { count, user }, plugins: [selectPlugin()] });

export const { select } = store;

export default store;
