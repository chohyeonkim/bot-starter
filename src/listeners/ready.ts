import {Listener} from "@ubccpsc310/bot-base";
import Log from "../util/Log";

const ready: Listener<"ready"> = {
    event: "ready",
    procedure(): void {
        Log.info("Bot started 👀");
    }
};

export default ready;
