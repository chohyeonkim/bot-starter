import {Listener, Log} from "../bot-base";

const ready: Listener<"ready"> = {
    event: "ready",
    procedure(): void {
        Log.info("Bot started 👀");
    }
};

export default ready;
