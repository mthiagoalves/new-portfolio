import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateUserDto {

  @IsString()
  @ApiProperty({
    description: 'Name of user',
    example: 'Thiago Alves'
  })
  name: string

  @ApiProperty({
    description: 'User nickname',
    example: 'm.thiago.alves'

  })
  nickname: string

  
  password: string


}
