import {ButtonHTMLAttributes, InputHTMLAttributes, ReactNode} from 'react'
import {FieldError} from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {
	name: string
}
