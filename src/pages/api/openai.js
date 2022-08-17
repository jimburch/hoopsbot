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
			prompt: 'A controversial and outlandish NBA hot take in one sentence:',
			n: 1,
			max_tokens: 50,
			temperature: 0.9,
			top_p: 1,
			best_of: 1,
			stop: ['\\n'],
		});

		return res
			.status(200)
			.json(completion.data.choices[0].text.replace(/['"]+/g, ''));
	} catch (error) {
		if (error.response) {
			console.log(error.response.status);
			console.log(error.response.data);
		} else {
			console.log(error.message);
		}
	}
};

export default handler;

// https://github.com/openai/openai-node
// https://beta.openai.com/docs/api-reference/introduction
// https://nextjs.org/docs/api-routes/introduction
