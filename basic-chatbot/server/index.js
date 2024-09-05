const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Use environment variable for API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use environment variable
});

const system_message = [
  { role: "system", content: "You are a helpful assistant." },
];

app.get("/", (req, res) => {
  res.send("<h1>AI-Chatbot</h1>");
});

async function askChatbot(req, res) {
  try {
    const completion = await openai.chat.completions.create({
      messages: req.body.messages,
      model: "gpt-3.5-turbo",
    });

    return res.status(200).send({
      messages: [...req.body.messages, completion.choices[0].message],
    });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return res.status(500).send({ error: "Something went wrong with the AI request." });
  }
}

app.post("/ask", askChatbot);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
