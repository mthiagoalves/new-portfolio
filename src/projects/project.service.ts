import { Injectable } from "@nestjs/common";
import { NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./entity/project.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUpdateDto } from "./dto/update-project.dto";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma:PrismaService) {}

  findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async findById(id: string ): Promise<Project>  {
    const record = await this.prisma.project.findUnique({ where: { id }});

    if(!record) {
      throw new NotFoundException(`Project id '${id}' is not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Project> {
    return this.findById(id);
  }

  create(dto:CreateProjectDto): Promise<Project> {

    const data: Project = {...dto}

    return this.prisma.project.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUpdateDto): Promise<Project> {
    await this.findById(id);

    const data: Partial<Project> = {...dto}

    return this.prisma.project.update({
      where: { id },
      data
    }).catch(this.handleError);
  }

  async delete(id: string){
    await this.findById(id);

    await this.prisma.project.delete({ where: {id} });
  }

  handleError (error: Error ): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLine || 'Another error in operation');
  }
}
