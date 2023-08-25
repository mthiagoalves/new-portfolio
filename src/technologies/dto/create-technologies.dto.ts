import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";

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

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Order to project',
    example: '1'
  })
  order: number
}
