import PropTypes from "prop-types";
import QuoteButton from "./QuoteButton";
import { useNavigate } from "react-router-dom";

export default function QuoteContainer(props) {
	const navigate = useNavigate();

	const { quoteText, quoteAuthor, quoteGenre } = props.data[0];

	return (
		<>
			<div className="relative">
				<div className="h-full w-[8px] bg-[#F7DF94] absolute -left-24"></div>

				<p className="font-[500] text-[36px] leading-[43.2px]">
					{"“" + quoteText + "”"}
				</p>
			</div>

			<QuoteButton
				quoteAuthor={quoteAuthor}
				quoteGenre={quoteGenre}
				onClick={() => navigate({ pathname: `/author/${quoteAuthor}` })}
			/>
		</>
	);
}

QuoteContainer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			quoteText: PropTypes.string.isRequired,
			quoteAuthor: PropTypes.string.isRequired,
			quoteGenre: PropTypes.string.isRequired,
		})
	).isRequired,
};
