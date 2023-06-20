import { Injectable } from "@nestjs/common";
import { NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string ): Promise<User>  {
    const record = await this.prisma.user.findUnique({ where: { id }});

    if(!record) {
      throw new NotFoundException(`User id '${id}' is not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  create(dto:CreateUserDto): Promise<User> {
    delete dto.confirmPassword;

    const data: User = {...dto}

    return this.prisma.user.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    delete dto.confirmPassword;

    const data: Partial<User> = {...dto}

    return this.prisma.user.update({
      where: { id },
      data
    }).catch(this.handleError);
  }

  async delete(id: string){
    await this.findById(id);

    await this.prisma.user.delete({ where: {id} });
  }

  handleError (error: Error ): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLine || 'Another error in operation');
  }
}
