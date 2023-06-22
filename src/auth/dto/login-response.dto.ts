import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class LoginRespondeDto {

  @ApiProperty({
    description: 'JWT generated for login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im0udGhpYWdvLmFsdmVzMiIsImlhdCI6MTY4NzQ0NzAwOCwiZXhwIjoxNjg3NDY4NjA4fQ.wdVQ2T_dHik4Pc4ZtYQtaVi8wKi4S2a760h4kNUzgHs'
  })
  token: string;

  @ApiProperty({
    description: 'Data user',
  })
  user: User;
}
