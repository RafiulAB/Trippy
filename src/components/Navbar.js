import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h2 className="logo">Trippy</h2>
			<nav className="nav-menu" ref={navRef}>
			
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/service">Service</a>
				<a href="/contract">Contract</a>
				<button className="sign-up">Sign Up</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;