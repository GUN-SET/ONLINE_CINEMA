import {FC} from 'react'

import {IAuthFields} from '@/screens/auth/authFields/authFileds.interface'

import Field from '@/ui/form-elements/Field'

import {validEmail} from '@/shared/regex'

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: {errors},
	isPasswordRequired = false
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email'
					}
				})}
				placeholder='E-mail'
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!'
								}
						  }
						: {}
				)}
				placeholder='Password'
				type='password'
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
