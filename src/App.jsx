import "./App.css";
import { BsArrowRepeat } from "react-icons/bs";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import useRandomQuotes from "./hooks/useRandomQuotes";
import RandomQuotes from "./pages/RandomQuotes";
import AuthorQuotes from "./pages/AuthorQuotes";

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const isAuthorRouteActive = location.pathname.includes("author")
		? true
		: false;

	const { refetch } = useRandomQuotes();

	return (
		<>
			<div className="mx-24 py-6 min-h-screen flex flex-col">
				<div className="flex justify-end cursor-pointer hover:text-[#a78e44] ">
					<div
						className="flex gap-2 items-center parent-custom"
						onClick={() =>
							!isAuthorRouteActive
								? refetch()
								: navigate({ pathname: "/" })
						}
					>
						random{" "}
						<BsArrowRepeat size={24} className="hover-custom" />
					</div>
				</div>

				<main className="grow max-w-[614px] mx-auto flex flex-col items-center justify-center">
					<Routes>
						<Route path="/" element={<RandomQuotes />} />
						<Route
							path="/author/:name"
							element={<AuthorQuotes />}
						/>
					</Routes>
				</main>
				<footer className="self-center mt-24">
					<p className="montserrat-custom text-[#828282]">
						created by{" "}
						<span className="font-semibold">joshalbert2433</span> -
						devChallenges.io
					</p>
				</footer>
			</div>
		</>
	);
}

export default App;
