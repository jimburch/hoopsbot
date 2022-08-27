import { Configuration, OpenAIApi } from "openai";
import knex from "../../data/db.js";

const { OPENAI_AUTH, OPENAI_ORG } = process.env;

const configuration = new Configuration({
  organization: OPENAI_ORG,
  apiKey: OPENAI_AUTH,
});

const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  try {
    const response = await openai.listEngines();
    const completion = await openai
      .createCompletion({
        model: "text-davinci-002",
        prompt:
          "Write a controversial NBA hot take in the style of a tweet in 280 characters or less.",
        n: 1,
        max_tokens: 500,
        temperature: 0.99,
        top_p: 1,
        best_of: 1,
      })
      .then(async (response) => {
        return await knex("takes")
          .insert({
            take: response.data.choices[0].text.replace(/\n/g, ""),
          })
          .returning("*");
      })
      .catch((error) => {
        throw new Error(error);
      });
    return res.status(200).json(completion[0]);
  } catch (error) {
    if (error.response) {
      s;
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

export default handler;

// handle duplicate take strings in the db
