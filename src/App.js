import Footer from "./components/footer";
import AppRoutes from "./components/router";
// import { RouterProvider } from 'react-router-dom';
// import "./App.css";

function App() {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<div className="flex-grow">
					<AppRoutes />
				</div>
				<Footer className="p-4 text-center text-gray-300 bg-gray-900" />
			</div>
		</>
	);
}

export default App;
