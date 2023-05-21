import Navbar from './Navbar';
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { SiTripadvisor } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Accordion from '../../allSmallComponents/Accordion';

const Header = () => {
	const [sidebarClass, setSidebarClass] = useState('none');
	sidebarClass === 'block'
		? (document.body.style.overflowY = 'hidden')
		: (document.body.style.overflowY = 'scroll');
	return (
		<>
			<div className="navbar-wrapper">
				<div className="header-top-nav">
					<div className="header-contacts-info-social-icons-wrapper">
						<div className="contacts-info-wrapper">
							<span className="contact-info email ">info@sealinks.com.np</span>
							<span className="contact-info number">+977 9801093735</span>
							<span className="contact-info address">
								Nag Pokhari, Kathmandu, Nepal
							</span>
						</div>
						<div className="social-icons-wrapper">
							<GrFacebook className="social-icon" />
							<BsInstagram className="social-icon" />
							<SiTripadvisor className="social-icon" />
						</div>
					</div>
				</div>
				<div className="header-nav-wrapper">
					<Navbar setSidebarClass={setSidebarClass} />
				</div>
			</div>
			{sidebarClass === 'block' && <div className="sidebar-overlay"></div>}
			<div className="side-bar" style={{ display: `${sidebarClass}` }}>
				<AiOutlineCloseCircle
					className="close-icon"
					onClick={() => {
						setSidebarClass('none');
					}}
				/>
				<div className="side-bar-item-list">
					<NavLink
						to="./"
						className="side-bar-item"
						onClick={() => {
							setSidebarClass('none');
						}}
					>
						Home
					</NavLink>
					<div className="side-bar-item inboundPackages">
						<label htmlFor="inboundPackages" className="inboundPackages">
							<NavLink
								to="./inboundPackages"
								className="side-bar-item inboundPackages"
								onClick={() => {
									setSidebarClass('none');
								}}
							>
								Inbound Packages
							</NavLink>
						</label>
						<label className="content-label">
							<div className="content" id="inboundPackages">
								<div className="content-list">
									<NavLink
										to="./inboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Top Tour Packages
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./inboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Top Trekking Packages
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./inboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Mountaineering
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./inboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Expedition
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./inboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Adventure Activities
									</NavLink>
								</div>
							</div>
						</label>
					</div>
					<div className="side-bar-item inboundPackages">
						<label htmlFor="inboundPackages" className="inboundPackages">
							<NavLink
								to="./outboundPackages"
								className="side-bar-item inboundPackages"
								onClick={() => {
									setSidebarClass('none');
								}}
							>
								Outbound Packages
							</NavLink>
						</label>
						<label className="content-label">
							<div className="content" id="inboundPackages">
								<div className="content-list">
									<NavLink
										to="./outboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Dubai
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./outboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Thailand
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./outboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										China
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./outboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Indonesia
									</NavLink>
								</div>
								<div className="content-list">
									<NavLink
										to="./outboundPackages"
										className="navlink"
										onClick={() => {
											setSidebarClass('none');
										}}
									>
										Colours of Europe
									</NavLink>
								</div>
							</div>
						</label>
					</div>
					<NavLink
						to="./ourGallery"
						className="side-bar-item"
						onClick={() => {
							setSidebarClass('none');
						}}
					>
						Our Gallery
					</NavLink>
					<NavLink
						to="./aboutUs"
						className="side-bar-item"
						onClick={() => {
							setSidebarClass('none');
						}}
					>
						About Us
					</NavLink>
					<NavLink
						to="./faq"
						className="side-bar-item"
						onClick={() => {
							setSidebarClass('none');
						}}
					>
						FAQ
					</NavLink>
					<NavLink
						to="./blog"
						className="side-bar-item"
						onClick={() => {
							setSidebarClass('none');
						}}
					>
						Blog
					</NavLink>
					<NavLink
						to="./contact"
						className="side-bar-item"
						onClick={() => {
							setSidebarClass('none');
						}}
					>
						Contact
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Header;
