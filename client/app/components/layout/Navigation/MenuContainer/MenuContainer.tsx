import {FC} from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import GenreMenu from '@/components/layout/Navigation/MenuContainer/genres/GenreMenu'
import {menus} from '@/components/layout/Navigation/MenuContainer/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={menus[0]} />
			<GenreMenu />
			<Menu menu={{title: 'General', items: []}} />
		</div>
	)
}

export default MenuContainer
