import Api from '../constants/api';

import axios from 'axios';

export default axios.create({
	baseURL: Api.base,
	withCredentials: true
});
