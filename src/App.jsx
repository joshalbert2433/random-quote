import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { getRandomQuote } from "./api/quote";
import { BsArrowRepeat } from "react-icons/bs";

function App() {
	const {
		data: quote,
		isLoading,
		isError,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey: ["quote"],
		queryFn: getRandomQuote,
	});

	return (
		<div className="mx-24 py-6 min-h-screen flex flex-col">
			<div className="flex justify-end cursor-pointer hover:text-[#a78e44] ">
				<div
					className="flex gap-2 items-center parent-custom"
					onClick={() => refetch()}
				>
					random <BsArrowRepeat size={24} className="hover-custom" />
				</div>
			</div>
			<main className="grow max-w-[614px] mx-auto align-middle mt-[200px]">
				{isLoading && <div>Loading...</div>}

				{isError && <div>Something went wrong</div>}

				{isSuccess && (
					<>
						<div className="relative">
							<div className="h-full w-[8px] bg-[#F7DF94] absolute -left-24"></div>

							<p className="font-[500] text-[36px] leading-[43.2px]">
								{"“" + quote?.data[0].quoteText + "”"}
							</p>
						</div>
						<div className="text-[#4F4F4F] mt-24">
							<div className="text-[24px] font-semibold">
								{quote?.data[0].quoteAuthor}
							</div>
							<div className="text-[14px]">
								{quote?.data[0].quoteGenre}
							</div>
						</div>
					</>
				)}
			</main>
			<footer className="self-center">
				<p className="montserrat-custom text-[#828282]">
					created by{" "}
					<span className="font-semibold">joshalbert2433</span> -
					devChallenges.io
				</p>
			</footer>
		</div>
	);
}

export default App;
