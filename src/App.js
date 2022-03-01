import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles/globalStyles";
import Header from "./components/header/header";
import TemporaryPage from "./components/temp/TemporaryPage";
import HomePage from "./pages/home";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/1" element={<HomePage />} />
				<Route path="/realisations" element={<TemporaryPage />} />
				<Route path="/documents" element={<TemporaryPage />} />
				<Route path="/projets" element={<TemporaryPage />} />
			</Routes>
		</>
	);
}

export default App;
