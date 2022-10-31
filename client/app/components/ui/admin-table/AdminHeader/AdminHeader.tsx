import {FC} from 'react'

import {IAdminHeader} from '@/ui/admin-table/AdminHeader/admin-header.interface'
import SearchField from '@/ui/searchFild/SearchField'

import AdminCreateButton from './AdminCreateButton'
import styles from './AdminHeader.module.scss'

const AdminHeader: FC<IAdminHeader> = ({onClick, handleSearch, searchTerm}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
