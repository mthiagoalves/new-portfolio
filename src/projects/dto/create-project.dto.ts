import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsPositive } from "class-validator";

export class CreateProjectDto{

  @IsString()
  @ApiProperty({
    description: 'Title of the project',
    example: 'Backoffice'
  })
  title: string;

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

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Order to project',
    example: '1'
  })
  order: number
}
