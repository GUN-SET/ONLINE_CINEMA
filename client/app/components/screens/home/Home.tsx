import {FC} from 'react'
import {toastr} from 'react-redux-toastr'

import {IHome} from '@/screens/home/home.interface'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/meta'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title='watch movies online'
			description='Watch MovieApp movies an TV shows online or stream right to your browser.'
		>
			<Heading
				title='Watch movies online'
				className='text-gray-300 mb-8 text-xl'
			/>
			<button onClick={() => toastr.success('Auth', 'You have successfully!')}>
				Show message
			</button>
		</Meta>
	)
}

export default Home
