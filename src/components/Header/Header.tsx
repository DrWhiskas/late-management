import React, { useState } from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Music, Users, Home } from 'lucide-react';



export default function Header() {
    const [showLinks, setShowLinks] = useState(false);
		function handleShowLinks() {
			setShowLinks(!showLinks);
		}
        
    return (
			<header className={showLinks ? 'header show-header' : 'header'}>
				<div className="header__container">
					<Link to="/Home" className="header__logo main-textColor">
						<Music size={24}/>Late Management
					</Link>
					<ul className="header__container__links main-textColor">
                        <li><Link  to="/" className="header__container__link main-textColor"> <Home/> Home</Link></li>
                        <li><Link  to="/" className="header__container__link main-textColor"> <Users/>Groups</Link></li>
                    </ul>
				</div>
			</header>
		);
}