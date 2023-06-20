import { ApiProperty } from "@nestjs/swagger"
import { IsString, Matches, MinLength } from "class-validator"

export class CreateUserDto {

  @IsString()
  @ApiProperty({
    description: 'Name of user',
    example: 'Thiago Alves'
  })
  name: string

  @IsString()
  @ApiProperty({
    description: 'User nickname',
    example: 'm.thiago.alves'

  })
  nickname: string

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is much weak'
  })
  @ApiProperty({
    description: 'Password to login',
    example: 'Abcd@1234'
  })
  password: string

  @ApiProperty({
    description: 'Confirm password as match with password',
    example: 'Abcd@1234'
  })
  confirmPassword: string


}
