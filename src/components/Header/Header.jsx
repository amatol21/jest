import React from 'react';
import './Header.scss';

const Header = () => {

	return (
		<header className="header">
			<div className="header__content cover line">
				<a href="https://google.com" className="header__logo">
					<img src="assets/img/header/logo.png" alt="logo" className="header__img" srcSet="assets/img/header/logo.svg" />
				</a>
				<nav className="header__nav line">
					<a href="https://google.com" className="header__name">Сергей</a>
					<a href="https://google.com" className="header__control">Выход</a>
				</nav>
			</div>
		</header>
	);
}



export default Header;