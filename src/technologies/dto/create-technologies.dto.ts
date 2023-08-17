import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTechnologiesDto {
  @IsString()
  @ApiProperty({
    description: 'Name of technology',
    example: 'JavaScript'
  })
  name: string

  @IsString()
  @ApiProperty({
    description: 'Slug of technology',
    example: 'javascript'
  })
  slug: string

  @IsString()
  @ApiProperty({
    description: 'Knowledges this technology',
    example: 'Advanced'
  })
  level: string
}
