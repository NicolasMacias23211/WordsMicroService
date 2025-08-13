import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

function canFormWord(word: string, letters: string[]): boolean {
  const letterCount: Record<string, number> = {};

  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  for (const letter of word) {
    if (!letterCount[letter]) {
      return false;
    }
    letterCount[letter]--;
  }

  return true;
}

app.post("/get-words", async (req, res) => {
  try {
    const letters: string[] = req.body.letters;
    if (!letters || letters.length === 0) {
      return res.status(400).json({
        error: "To perform the search, you must send an array of letters",
      });
    }

    const { data } = await axios.get("https://api.datamuse.com/words?sp=*");
    console.log("Data retrieved from API:", data);
    const wordList: string[] = data.map((item: any) => item.word.toLowerCase());

    const possibleWords = wordList.filter((word) => canFormWord(word, letters));

    res.json({
      total: possibleWords.length,
      words: possibleWords,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing the request" });
  }
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
