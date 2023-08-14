import { useQuery } from "@tanstack/react-query";
import Quote from "../components/Quote";
import { useParams } from "react-router-dom";
import { getQuoteByAuthor } from "../api/quote";

export default function AuthorQuotes() {
	const { name } = useParams();

	const {
		data: authorQuote,
		isLoading,
		isError,
		isFetching,
	} = useQuery({
		queryKey: ["authorQuote"],
		queryFn: () => getQuoteByAuthor(name),
	});

	const authorName = authorQuote?.data[0].quoteAuthor;

	if (isError) {
		return <div>Something went wrong</div>;
	}

	if (isLoading || isFetching) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="text-[36px] font-bold self-start">{authorName}</div>

			<div className="flex flex-col gap-24 mt-24">
				{authorQuote?.data?.map((quote) => (
					<Quote quoteText={quote.quoteText} key={quote._id} />
				))}
			</div>
		</>
	);
}
