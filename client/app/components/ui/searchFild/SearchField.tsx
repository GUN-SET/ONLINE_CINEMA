import {FC} from 'react'

import {MaterialIcon} from '@/ui/MaterialIcon'
import {ISearchField} from '@/ui/searchFild/searchField.interface'

import styles from './SearchField.module.scss'

const SearchField: FC<ISearchField> = ({searchTerm, handleSearch}) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name='MdSearch' />
			<input placeholder='Search' value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
