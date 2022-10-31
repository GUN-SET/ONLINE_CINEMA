import {FC} from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import {usePopularGenres} from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'

import SkeletonLoader from '@/ui/Skeleton.loader'

const GenreMenu: FC = () => {
	const {isLoading, data} = usePopularGenres()

	return isLoading ? (
		<div className='mx-11 mb-6'>
			<SkeletonLoader count={5} className='h-7 mt-6' />
		</div>
	) : (
		<Menu menu={{title: 'Popular genres', items: data || []}} />
	)
}

export default GenreMenu
