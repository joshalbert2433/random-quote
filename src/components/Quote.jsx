import PropTypes from "prop-types";

export default function Quote({ quoteText }) {
	return (
		<div className="relative">
			<div className="h-full w-[8px] bg-[#F7DF94] absolute -left-24"></div>

			<p className="font-[500] text-[36px] leading-[43.2px]">
				{"“" + quoteText + "”"}
			</p>
		</div>
	);
}

Quote.propTypes = {
	quoteText: PropTypes.string.isRequired,
};
