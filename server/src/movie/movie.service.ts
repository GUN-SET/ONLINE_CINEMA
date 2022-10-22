import {Injectable, NotFoundException} from '@nestjs/common'
import {InjectModel} from 'nestjs-typegoose'
import {ModelType} from '@typegoose/typegoose/lib/types'
import {MovieModel} from './movie.model'
import {UpdateMovieDto} from './dto/update-movie.dto'
import {Types} from 'mongoose'

@Injectable()
export class MovieService {
	constructor(
		@InjectModel(MovieModel) private readonly MovieModel: ModelType<MovieModel>
	) {}

	async getAll(searchTerm?: string) {
		// eslint-disable-next-line @typescript-eslint/ban-types
		let options: {}

		if (searchTerm)
			options = {
				$or: [
					{
						title: new RegExp(searchTerm, 'i')
					}
				]
			}

		return this.MovieModel.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'desc'
			})
			.populate('actors genres')
			.exec()
	}

	async bySlug(slug: string) {
		const doc = await this.MovieModel.findOne({slug})
			.populate('actors genres')
			.exec()
		if (!doc) throw new NotFoundException('Movie not found')

		return doc
	}

	async byActor(actorId: Types.ObjectId) {
		const docs = await this.MovieModel.findOne({actors: actorId}).exec()
		if (!docs) throw new NotFoundException('Movies not found')

		return docs
	}

	async byGenres(genreIds: Types.ObjectId[]) {
		const docs = await this.MovieModel.find({genres: {$in: genreIds}}).exec()
		if (!docs) throw new NotFoundException('Movies not found')

		return docs
	}

	async updateCountOpened(slug: string) {
		const updateDoc = await this.MovieModel.findOneAndUpdate(
			{slug},
			{$inc: {countOpened: 1}},
			{new: true}
		).exec()

		if (!updateDoc) throw new NotFoundException('Movie not found')

		return updateDoc
	}

	async updateRating(id: Types.ObjectId, newRating: number) {
		return this.MovieModel.findByIdAndUpdate(
			id,
			{
				rating: newRating
			},
			{new: true}
		).exec()
	}

	async getMostPopular() {
		return this.MovieModel.find({countOpened: {$gt: 0}})
			.sort({countOpened: -1})
			.populate('genres')
			.exec()
	}

	/* ADMIN PLACE */
	async byId(_id: string) {
		const doc = await this.MovieModel.findById(_id)
		if (!doc) throw new NotFoundException('Movie not found')

		return doc
	}

	async create() {
		const defaultValue: UpdateMovieDto = {
			poster: '',
			genres: [],
			actors: [],
			bigPoster: '',
			title: '',
			slug: '',
			videoUrl: ''
		}

		const movie = await this.MovieModel.create(defaultValue)

		return movie._id
	}

	async update(_id: string, dto: UpdateMovieDto) {
		/* TELEGRAM NOTIFICATION*/

		const updateDoc = await this.MovieModel.findByIdAndUpdate(_id, dto, {
			new: true
		}).exec()

		if (!updateDoc) throw new NotFoundException('Movie not found')

		return updateDoc
	}

	async delete(_id: string) {
		const deleteDoc = await this.MovieModel.findByIdAndDelete(_id).exec()

		if (!deleteDoc) throw new NotFoundException('Movie not found')

		return deleteDoc
	}
}
