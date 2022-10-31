import {PropsWithChildren} from 'react'

import UserList from '@/components/screens/admin/users/UserList'

import {NextPageAuth} from '@/shared/types/auth.types'

const UserListPage: NextPageAuth<PropsWithChildren<unknown>> = () => {
	return <UserList />
}

UserListPage.isOnlyAdmin = true

export default UserListPage
