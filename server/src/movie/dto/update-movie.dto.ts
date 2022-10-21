import {IsArray, IsNumber, IsObject, IsString} from 'class-validator'
import {Types} from 'mongoose'

export class Parameters {
	@IsNumber()
	year: number

	@IsNumber()
	duration: number

	@IsNumber()
	country: string
}

export class UpdateMovieDto {
	@IsString()
	poster: string

	@IsString()
	bigPoster: string

	@IsString()
	title: string

	@IsString()
	slug: string

	@IsObject()
	parameters?: Parameters

	@IsString()
	videoUrl: string

	@IsArray()
	@IsString({each: true})
	genres: Types.ObjectId[]

	@IsArray()
	@IsString({each: true})
	actors: string[]

	isSendTelegram?: boolean
}
