import {PropsWithChildren} from 'react'

import ActorList from '@/components/screens/admin/actors/ActorList'

import {NextPageAuth} from '@/shared/types/auth.types'

const ActorListPage: NextPageAuth<PropsWithChildren<unknown>> = () => {
	return <ActorList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
