import {
    createActor, 
    hello_backend,
} from "../../declarations/hello_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
let actor = hello_backend;
console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);

const whoAmIButton = async (e) => {
    e.preventDefault();
    // whoAmIButton.setAttribute("disabled", true);

    const principal = await actor.whoami();
    // whoAmIButton.removeAttribute("disabled");
    return principal.toString();
};

const loginButton = async (e) => {
    e.preventDefault();
    let authClient = await AuthClient.create();
    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider:
                process.env.DFX_NETWORK === "ic"
                    ? "https://identity.ic0.app"
                    : `http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai&id=rdmx6-jaaaa-aaaaa-aaadq-cai`,
            onSuccess: resolve,
        });
    });
    const identity = authClient.getIdentity();
    const agent = new HttpAgent({ identity });
    actor = createActor(process.env.CANISTER_ID_II_INTEGRATION_BACKEND, {
        agent,
    });
    return false;
};

export { whoAmIButton, loginButton }