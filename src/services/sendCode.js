
import request from 'app/lib/request';
import { lawUrl } from 'app/lib/lawUrl';
export const sendCode = ({ ...other } = {}, config = {}) =>
	request(lawUrl('/api/app/login/send-code', { ...other }), {
		data: {},
		method: 'post',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	});