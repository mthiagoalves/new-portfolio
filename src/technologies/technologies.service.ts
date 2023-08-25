import { Injectable } from "@nestjs/common";
import { NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
import { CreateTechnologiesDto } from "./dto/create-technologies.dto";
import { Technologies } from "./entities/technologies.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateTechnologiesDto } from "./dto/update-technologies.dto";

@Injectable()
export class TechnologiesService {
  constructor(private readonly prisma:PrismaService) {}

  findAll(): Promise<Technologies[]> {
    return this.prisma.technologies.findMany({});
  }

  async findById(id: string ): Promise<Technologies>  {
    const record = await this.prisma.technologies.findUnique({ where: { id }});

    if(!record) {
      throw new NotFoundException(`Technologies id '${id}' is not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Technologies> {
    return this.findById(id);
  }

  create(dto:CreateTechnologiesDto): Promise<Technologies> {

    const data: Technologies = {...dto}

    return this.prisma.technologies.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateTechnologiesDto): Promise<Technologies> {
    await this.findById(id);

    const data: Partial<Technologies> = {...dto}

    return this.prisma.technologies.update({
      where: { id },
      data
    }).catch(this.handleError);
  }

  async delete(id: string){
    await this.findById(id);

    await this.prisma.technologies.delete({ where: {id} });
  }

  handleError (error: Error ): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLine || 'Another error in operation');
  }
}
