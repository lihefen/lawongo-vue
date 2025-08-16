
import request from 'app/lib/request';
import { lawUrl } from 'app/lib/lawUrl';
export const loginCode = ({ ...other } = {}, config = {}) =>
	request(lawUrl('/api/app/login/login/code', { ...other }), {
		data: {},
		method: 'post',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	});