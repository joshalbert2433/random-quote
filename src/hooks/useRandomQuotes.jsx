import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "../api/quote";

export default function useRandomQuotes() {
	const { data, isLoading, isError, isSuccess, refetch, isFetching } =
		useQuery({
			queryKey: ["quote"],
			queryFn: getRandomQuote,
		});

	return { data, isLoading, isError, isSuccess, refetch, isFetching };
}
