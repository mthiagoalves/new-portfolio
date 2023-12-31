import { Injectable } from "@nestjs/common";
import { BadRequestException, NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    name: true,
    nickname: true,
    password: false,
    createdAt: true,
    updateAt: true
  };

  constructor(private readonly prisma:PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect
    });
  }

  async findById(id: string ): Promise<User>  {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if(!record) {
      throw new NotFoundException(`User id '${id}' is not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async create(dto:CreateUserDto): Promise<User> {
    if(dto.password != dto.confirmPassword) {
      throw new BadRequestException('The passwords dont matches');
    }
    delete dto.confirmPassword;

    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10)
    }

    return this.prisma.user.create({
      data,
      select: this.userSelect
    }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if(dto.password && (dto.password != dto.confirmPassword)) {
        throw new BadRequestException('The passwords dont matches');
    }

    delete dto.confirmPassword;

    const data: Partial<User> = {...dto}

    if(data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: this.userSelect
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
