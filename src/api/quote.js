import axios from "axios";

const Quote = axios.create({
	baseURL: "https://quote-garden.onrender.com/api/v3",
});

export const getRandomQuote = async () => {
	try {
		const response = await Quote.get("/quotes/random");

		return response.data;
	} catch (error) {
		throw new Error("Something went wrong");
	}
};
