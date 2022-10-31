import {PropsWithChildren} from 'react'

import MovieList from '@/components/screens/admin/movies/MovieList'

import {NextPageAuth} from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth<PropsWithChildren<unknown>> = () => {
	return <MovieList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
