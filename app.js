const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

const threeWords = (words) => {
	const answer = [];
	for (let i = 2; i < words.length; i += 3) {
		answer.push(words[i]);
	}
	return answer.join("");
};

app.post("/test", (req, res) => {
	const { string_to_cut } = req.body;
	const result = threeWords(string_to_cut);
	res.send({ return_string: result });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
