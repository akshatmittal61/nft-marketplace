import React from "react";
import { Hero } from "@/components/Home";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/Home.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Hero />
		</main>
	);
};

export default HomePage;
