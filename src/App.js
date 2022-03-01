import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import TemporaryPage from "./components/temp/TemporaryPage";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/1" element={<TemporaryPage />} exact />
				<Route path="/realisations" element={<TemporaryPage />} />
				<Route path="/documents" element={<TemporaryPage />} />
				<Route path="/projets" element={<TemporaryPage />} />
			</Routes>
		</div>
	);
}

export default App;
