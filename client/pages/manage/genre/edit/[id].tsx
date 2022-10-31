import {PropsWithChildren} from 'react'

import GenreEdit from '@/components/screens/admin/genre/GenreEdit'

import {NextPageAuth} from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth<PropsWithChildren<unknown>> = () => {
	return <GenreEdit />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
