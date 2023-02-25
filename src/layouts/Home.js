
import { useEffect } from 'react';
import Banner from '../components/Banner.js';
import Header from '../components/Header.js';
import Main from '../components/Main.js';



function Home() {
	const select = (el, all = false) => {
		let elem = el.trim()
		if (all) {
			return [...document.querySelectorAll(elem)]
		} else {
			return document.querySelector(elem)
		}
	}
	
	useEffect(() => {
		let selectHeader = select('#header')
		if (selectHeader) {
			const headerScrolled = () => {
				if (window.scrollY > 125) {
					selectHeader.classList.add('header-scrolled')
				} else {
					selectHeader.classList.remove('header-scrolled')
				}
			}
			window.addEventListener('load', headerScrolled)
			window.addEventListener('scroll', headerScrolled)
		}
	  }, []);
	return (
		<div>
			<Header />
			<Banner />
			<Main />
		</div>
	);
}

export default Home;
