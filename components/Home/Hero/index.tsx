import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@/library";
// import useConnectWallet from "../../../hooks/connect-wallet";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { copyToClipboard, stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

const HomeHero = () => {
	// const walletState = useConnectWallet();
	const walletState = {
		signer: {
			address: "0x1234567890",
		},
		address: "0x1234567890",
		connect: () => {},
		disconnect: () => {},
	};
	const [buttonIcon, setButtonIcon] = useState(
		<Image
			src="/vectors/metamask.svg"
			alt="metamask"
			width={28}
			height={28}
		/>
	);

	const handleClick = () => {
		if (!walletState?.signer) {
			walletState.connect();
			setButtonIcon(<IoCopyOutline />);
		} else {
			copyToClipboard(walletState.signer.address);
			setButtonIcon(<IoCheckmark />);
			setTimeout(() => {
				setButtonIcon(<IoCopyOutline />);
			}, 2500);
		}
	};

	const handleDisconnect = () => {
		walletState.disconnect();
	};

	useEffect(() => {
		if (walletState?.signer) {
			setButtonIcon(<IoCopyOutline />);
		} else {
			setButtonIcon(
				<Image
					src="/vectors/metamask.svg"
					alt="metamask"
					width={28}
					height={28}
				/>
			);
		}
	}, [walletState?.signer, walletState?.address]);

	return (
		<section className={classes("")}>
			<div className={classes("-header")}>
				<Image src="/favicon.png" alt="logo" width={128} height={128} />
				<nav>
					<ul>
						<li>Home</li>
						<li>Marketplace</li>
						<li>Create</li>
						<li>Your Profile</li>
					</ul>
				</nav>
				{walletState?.signer ? (
					<div className={classes("-header-chip")}>
						<Typography as="span" size="s">
							{walletState.signer.address.slice(0, 5) +
								"..." +
								walletState.signer.address.slice(-3)}
						</Typography>
						<button onClick={handleClick}>{buttonIcon}</button>
						<button onClick={handleDisconnect}>
							<LuLogOut />
						</button>
					</div>
				) : (
					<Button
						icon={buttonIcon}
						iconPosition="left"
						className={classes("-button")}
						size="large"
						onClick={handleClick}
					>
						Connect Wallet
					</Button>
				)}
			</div>
			<div className={classes("-body")}>
				<div className={classes("-content")}>
					<Typography as="h1" className={classes("-title")}>
						Discover and collect extraordinary NFTs
					</Typography>
					<Typography
						as="p"
						className={classes("-subtitle")}
						size="md"
					>
						On NFT Marketplace you can buy, sell, and explore
						digital goods secured with blockchain technology.
					</Typography>
					<span className="empty"></span>
					<span className="empty"></span>
				</div>
				<div className={classes("-graphic")}>
					<Image
						src="/images/cat.png"
						alt="Robot"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
