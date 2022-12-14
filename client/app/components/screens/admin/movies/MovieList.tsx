import {FC} from 'react'

import {useMovies} from '@/screens/admin/movies/useMovies'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/meta'

const MovieList: FC = () => {
	const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useMovies()

	return (
		<Meta title='Movies'>
			<AdminNavigation />
			<Heading title='Movies' />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genre', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MovieList
