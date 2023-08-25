import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsPositive, IsArray } from "class-validator";

export class CreateProjectDto {

  @IsString()
  @ApiProperty({
    description: 'Title of the project',
    example: 'Backoffice'
  })
  title: string

  @IsString()
  @ApiProperty({
    description: 'Slug of the project',
    example: 'backoffice'
  })
  slug: string

  @IsString()
  @ApiProperty({
    description: 'A little description of the project',
    example: 'Project created for Covet Group...'
  })
  smallDescription: string

  @IsString()
  @ApiProperty({
    description: 'Description of the project',
    example: 'Project created for Covet Group, where i make a backoffice using Laravel with...'
  })
  description: string

  @IsString()
  @ApiProperty({
    description: 'Link repository of the project',
    example: 'https://github.com/mthiagoalves/project-repository'
  })
  repository: string

  @IsString()
  @ApiProperty({
    description: 'Link deploy of the project',
    example: ''
  })
  deploy: string

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Order to project',
    example: '1'
  })
  order: number

  @IsArray()
  @ApiProperty({
    description: 'Array of technology IDs associated with the project',
    example: ['1', '2', '3']
  })
  technologies: string[];
}
