import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class LoginRespondeDto {

  @ApiProperty({
    description: 'JWT generated for login',
    example: 'ANYTHING_TOKEN'
  })
  token: string;

  @ApiProperty({
    description: 'Data user',
  })
  user: User;
}
