const baseFetch = async (url, {body, method = 'GET'} = {}) => {
	try {
		const response = await fetch(url, {
			...(body && {body: JSON.stringify(body)}),
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
			method,
		});
		try {
			const data = await response.json();
			return {data, response};
		} catch(err) {
			const data = await response;
			return {data};
		}
	} catch(erro) {
		return {};
	}
};


const ProjFetchAPI = {
	delete: (url) => baseFetch(url, {method: 'DELETE'}),
	post: (url, options) => baseFetch(url, {...options, method: 'POST'}),
	put: (url, options) => baseFetch(url, {...options, method: 'PUT'}),
	get: (url) => baseFetch(url)
};
export default ProjFetchAPI;