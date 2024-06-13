exports.handler = async (event) => {
	console.log('Hello, Esbuild!');

	return {
		statusCode: 200,
		body: JSON.stringify('Hello from Github Actions!')
	};
};
