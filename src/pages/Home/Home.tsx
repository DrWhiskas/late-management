import React from "react";
import './Home.css';

import Header from "../../components/Header/Header";

export default function Home() {


    return (
			<div className="home">
				<Header />
				<div className="home__container">
					<h1 className="home__title main-textColor">Late Management System</h1>
					<p className="home__description">
						Create and manage your groups, members, albums, and songs all in one
						place.
					</p>
				</div>
                <div className="home__container__content">
                    
                </div>
			</div>
		);
}