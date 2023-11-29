import { createContext } from "react";

const GlobalContext = createContext({
	loggedIn: false,
	setLoggedIn: () => {},
	walletState: {
		contract: null,
		provider: null,
		signer: null,
		address: null,
	},
	setWalletState: (_: any) => {},
});

export default GlobalContext;
