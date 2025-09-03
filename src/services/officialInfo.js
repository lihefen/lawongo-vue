
import request from 'app/lib/request';
import { lawUrl } from 'app/lib/lawUrl';
// 官网-客户信息收集-免登录免加密
export const officialInfo = ({ ...other } = {}, config = {}) =>
	request(lawUrl('/api/out/official/info', { ...other }), {
		data: {},
		method: 'post',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	});