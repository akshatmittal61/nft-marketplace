export const dbUri: string =
	process.env.NEXT_PUBLIC_APP_DB_URI ?? "mongodb://localhost:27017/nextjs";
export const jwtSecret: string =
	process.env.NEXT_PUBLIC_APP_JWT_SECRET ?? "secret";

export const backendBaseUrl = process.env.REACT_APP_BACKEND_URL + "/api";

export const marketPlaceContractAddress = process.env
	.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS as string;
