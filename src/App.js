import "./App.scss";
import Article from "./components/article";
import Header from "./components/header";
import Hero from "./components/hero/hero";
import Biography from "./components/bibliography/author";
import CharaListing from "./components/List";
import Subtitle from "./components/subtitle";

function App() {
	return (
		<div id="main">
			<Header />
			<Hero />
			<Subtitle />
			<Article />
			<CharaListing />
			<Biography />
		</div>
	);
}

export default App;
