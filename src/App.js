import './App.css';
import './fonts.css'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { Fragment } from 'react';

import Navbar from './components/Navbar';
import Title from './components/Title';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Showcase from './pages/Showcase';
import Tutorials from './pages/Tutorials';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
	var appData = [
		{
			title: "Magniflyer",
			route: "/magniflyer",
			caption: "Infinite Flying Fun",
			ios: "https://apps.apple.com/us/app/magniflyer/id1535318648",
			android: "https://play.google.com/store/apps/details?id=com.timeBenter.Magniflyer",
			image: require("./images/backgrounds/magniflyer.gif"),
			font: "magniflyer-font"
		},
		{
			title: "Space Driftin'",
			route: "/spacedriftin",
			caption: "A Space Driftin' Game",
			ios: "https://apps.apple.com/us/app/space-driftin/id1496929618",
			android: "https://play.google.com/store/apps/details?id=com.timeBenter.SpaceDrift",
			image: require("./images/backgrounds/spacedrift.gif"),
			font: "sabotage3d-font"
		},
		{
			title: "Path Of Patterns",
			route: "/pathofpatterns",
			caption: "Finite Drawing Fun",
			ios: "https://apps.apple.com/us/app/path-of-patterns/id1594004492",
			android: "https://play.google.com/store/apps/details?id=com.timebenter.pathofpatterns",
			image: require("./images/backgrounds/pathofpatterns.png"),
			font: "pathofpatterns-font"
		},
		{
			title: "Sabotage 3D",
			route: "/sabotage3d",
			caption: "If it glows, it needs to go!",
			ios: "https://apps.apple.com/us/app/sabotage-3d/id1568927846",
			android: "https://play.google.com/store/apps/details?id=com.timebenter.scifisabotage",
			image: require("./images/backgrounds/sabotage3d.png"),
			font: "sabotage3d-font"
		}
	];

	// function MyRedirect(props) {
	// 	window.location.replace(props.url);
	// 	return null
	// }

	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<Fragment>
						<Navbar active={1} />
						<Title title={"gamedevchris"}/>
						<Home />
					</Fragment>
				} />

				<Route path="/projects" element={
					<Fragment>
						<Navbar active={2} />
						<Title title={"My Projects"}/>
						<Projects />
					</Fragment>
				} />

				<Route path="/tutorials" element={
					<Fragment>
						<Navbar active={3} />
						<Title title={"Tutorials"}/>
						<Tutorials />
					</Fragment>
				} />

				<Route path="/privacy-policy" element={
					<Fragment>
						<Navbar />
						<Title title={"Privacy Policy"}/>
						<PrivacyPolicy />
					</Fragment>
				} />

				{appData.map((data, i) => {
					return (
						<Route key={i} path={data.route} element={
							<Fragment>
								<Navbar/>
								<Title font={data.font} title={data.title}/>
								<Showcase data={data} />
							</Fragment>
						} />
					)
				})}


				<Route path='*' element={
					<Fragment>
						<Navbar/>
						<Title title={"Page Not Found"}/>
						<p>The page you are trying to access does not exist.</p>
						<Link to="/">Home</Link>
					</Fragment>
				}/>


				{/* <Route path="/javascript-raycaster" element={
					<MyRedirect url="https://chrisgamedev.github.io/javascript-raycaster/"/>
				} />

				<Route path="/rescuetheplanet" element={
					<MyRedirect url="https://chrisgamedev.github.io/rescuetheplanet/webversion/"/>
				} /> */}

				{/* <Route path="/tutorials/how-to-develop-a-unity-app-for-ios-on-windows" element={
					<MyRedirect url="https://chrisgamedev.github.io/my-tutorials/how-to-develop-a-unity-app-for-ios-on-windows"/>
				} />

				<Route path="/tutorials/how-to-make-a-drawing-game-in-unity" element={
					<MyRedirect url="https://chrisgamedev.github.io/my-tutorials/how-to-make-a-drawing-game-in-unity"/>
				} /> */}

			</Routes>

			<Footer />
		</Router>
	);
}