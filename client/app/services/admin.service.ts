import {getUsersUrl} from '@/configs/api.config'

import axios from '../api/interceptors'

export const AdminService = {
	async getCountUsers() {
		return axios.get<number>(getUsersUrl('/count'))
	}
}
