import dynamic from 'next/dynamic'
import {FC} from 'react'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import {IMenu} from '@/components/layout/Navigation/MenuContainer/menu.interface'

import styles from './Menu.module.scss'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false
})

const Menu: FC<{menu: IMenu}> = ({menu: {items, title}}) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
