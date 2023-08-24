import { Injectable } from "@nestjs/common";
import { NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./entity/project.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUpdateDto } from "./dto/update-project.dto";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) { }

  findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: {
        technologies: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findById(id: string): Promise<Project> {
    const record = await this.prisma.project.findUnique({
      where: { id },
      include: {
        technologies: {
          select: {
            name: true
          }
        }
      }
    });

    if (!record) {
      throw new NotFoundException(`Project id '${id}' is not found`);
    }

    return record;
  }

  async findOne(id: string): Promise<Project> {
    return this.findById(id);
  }

  async create(dto: CreateProjectDto): Promise<Project> {
    const { technologies, ...projectData } = dto;

    const createdProject = await this.prisma.project.create({
      data: projectData,
      include: {
        technologies: {
          select: { name: true }
        }
      },
    });

    return createdProject;
  }

  async update(id: string, dto: UpdateUpdateDto): Promise<Project> {
    await this.findById(id);

    const data: Partial<Project> = { ...dto }

    return this.prisma.project.update({
      where: { id },
      data,
      include: {
        technologies: {
          select: {
            name: true
          }
        }
      }
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.project.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLine || 'Another error in operation');
  }
}
