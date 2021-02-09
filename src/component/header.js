import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '../breno-resume.pdf';
import image from '../image/image-header.svg';
import '../App.css'; 

class Header extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

handleClick() {
	const linkResume = document.createElement("a");
	linkResume.download = `Breno's Resume`
	linkResume.href =`${Resume}`;
	linkResume.click()
}

render() {
	return (
		<div className="header">
			<div className="nav">
				<button
					type="button"
					className="btn"
				>
					<AnchorLink
						className="link-home"
						href="#home"
					>
						HOME
					</AnchorLink>
				</button>
				<div className="btn resume">
					<input
						className="btn btn-outline-danger btn-sm"
						type="button"
						value="FAÇA DOWNLOAD DO MEU CURRÍCULO"
						onClick={ () => this.handleClick() }
					/>
				</div>
				</div>
				<div className="img">
					<img className="img-header" src={ image } alt="Background Tecnologia"/>
				</div>
		</div>
	)
}
}

export default Header;
