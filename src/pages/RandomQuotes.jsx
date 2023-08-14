import QuoteContainer from "../components/QuoteContainer";
import useRandomQuotes from "../hooks/useRandomQuotes";

export default function RandomQuotes() {
	const { data: quote, isError, isLoading, isFetching } = useRandomQuotes();

	if (isError) {
		return <div>Something went wrong</div>;
	}

	if (isLoading || isFetching) {
		return <div>Loading...</div>;
	}

	return <QuoteContainer {...quote} />;
}
