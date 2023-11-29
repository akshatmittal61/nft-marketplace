import { Contract, ethers } from "ethers";
import useStore from "./store";
import instance from "@/assets/MyNft.sol/MyNFT.json";
import { marketPlaceContractAddress } from "@/config";

const useConnectWallet = () => {
	const { walletState, setWalletState } = useStore();

	const createInstance = async () => {
		try {
			if (!(window as any).ethereum) {
				throw new Error("Please install MetaMask.");
			}
			const provider = new ethers.BrowserProvider(
				(window as any).ethereum
			);
			const signer = await provider.getSigner();
			const contract = new Contract(
				marketPlaceContractAddress,
				instance.abi,
				signer
			);
			setWalletState({
				contract,
				provider,
				signer,
				address: await signer.getAddress(),
			});
		} catch (error: any) {
			console.error(error);
			alert(error.message);
			return Promise.reject(error);
		}
	};

	const disconnectWallet = () => {
		setWalletState({
			contract: null,
			provider: null,
			signer: null,
			address: null,
		});
	};

	return {
		signer: walletState?.signer,
		contract: walletState?.contract,
		connect: createInstance,
		disconnect: disconnectWallet,
	};
};

export default useConnectWallet;
