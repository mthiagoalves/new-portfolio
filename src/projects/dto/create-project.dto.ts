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
    description: 'Description of the project',
    example: 'Project created for Covet Group.'
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
