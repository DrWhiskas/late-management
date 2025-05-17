import React from "react";
import './Home.css';

import Header from "../../components/Header/Header";

export default function Home() {


    return (
			<div className="home">
				<Header />
				<h1 className="home__title main-textColor">Late Management System</h1>
				<p>
					Create and manage your groups, members, albums, and
					songs all in one place.
				</p>
			</div>
		);
}