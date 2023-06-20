import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTechnologiesDto {
  @IsString()
  @ApiProperty({
    description: 'Name of technology',
    example: 'JavaScript'
  })
  name: string
}
