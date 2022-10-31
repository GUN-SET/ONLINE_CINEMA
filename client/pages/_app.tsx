import {AppProps} from 'next/app'

import {TypeComponentAuthFields} from '@/shared/types/auth.types'

import '../app/assets/styles/globals.scss'
import MainProvider from '../app/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({Component, pageProps}: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
