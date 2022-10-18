import { IsString } from 'class-validator'

export class RefreshTokenDto {
	@IsString({
		message: 'You did not pas refresh token or it os not a string!'
	})
	refreshToken: string
}
