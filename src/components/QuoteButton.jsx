import { MdOutlineArrowRightAlt } from "react-icons/md";
import PropTypes from "prop-types";

export default function QuoteButton({ quoteAuthor, quoteGenre, onClick }) {
	return (
		<div
			className="flex justify-between items-center text-[#4F4F4F] mt-24 py-8 px-8 hover:bg-[#333] hover:text-white group cursor-pointer w-full transition ease-out "
			onClick={onClick}
		>
			<div>
				<div className="text-[24px] font-semibold">{quoteAuthor}</div>
				<div className="text-[14px]">{quoteGenre}</div>
			</div>
			<MdOutlineArrowRightAlt
				size={38}
				className="hidden group-hover:block"
			/>
		</div>
	);
}

QuoteButton.propTypes = {
	quoteAuthor: PropTypes.string.isRequired,
	quoteGenre: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
