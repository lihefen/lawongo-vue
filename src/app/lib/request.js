import axios from 'axios';
// import {  Toast } from 'vant';

const errorHandler = error => {
	console.log(error.response);
	return error;
};

const request = axios.create({
	timeout: 10000,
	withCredentials: true,
	headers: {
		'Cache-Control': 'no-cache',
	},
});

const setRequestType = config => {
	let isForm = /x-www-form-urlencoded/.test(config.headers['Content-Type']);
	if ((config.requestType && config.requestType.toLowerCase() === 'form') || isForm) {
		config['transformRequest'] = [
			data => {
				return urlEncode(data);
			},
		];
	}
	return config;
};
request.interceptors.request.use(
	config => {
		setRequestType(config);
		// let { showLoading } = config;
		// if (showLoading) {
		// 	config.loadingHandler = loading.show();
		// }

		return config;
	},
	err => {
		errorHandler(err);
	}
);

request.interceptors.response.use(
	res => {
		let { config, status, data } = res;
		if ( status !== 200) {
			// showToast('网络错误，请稍后重试');
		}
		return data;
	},
	err => {
		errorHandler(err);
		try {
			console.log(err);
		} catch (e) {
			log(e);
		}
	}
);

export default request;
