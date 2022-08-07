import { Configuration, OpenAIApi } from 'openai';

const { OPENAI_AUTH, OPENAI_ORG } = process.env;

const configuration = new Configuration({
	organization: OPENAI_ORG,
	apiKey: OPENAI_AUTH,
});

const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
	try {
		const response = await openai.listEngines();
		const completion = await openai.createCompletion({
			model: 'text-davinci-002',
			prompt: 'Generate a controversion and outlandish NBA hot take',
			// engine: 'davinci',
			max_tokens: 50,
			temperature: 0.9,
			// topP: 1,
			stop: 'input',
		});

		console.log(completion.data);

		return res.status(200).json(completion.data.choices[0].text);
	} catch (error) {
		console.log(error);
	}
};

export default handler;

// https://github.com/openai/openai-node
// https://beta.openai.com/docs/api-reference/introduction
// https://nextjs.org/docs/api-routes/introduction
