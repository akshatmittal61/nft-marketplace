import { useState } from "react";

const useContextData = () => {
	// Global Authentication State
	const [loggedIn, setLoggedIn] = useState(false);
	const [walletState, setWalletState] = useState<any>({
		contract: null,
		provider: null,
		signer: null,
		address: null,
	});

	const handleWalletState = (wallet: any) => {
		setWalletState(wallet);
	};

	return {
		loggedIn,
		setLoggedIn,
		walletState,
		setWalletState: handleWalletState,
	};
};

export default useContextData;
