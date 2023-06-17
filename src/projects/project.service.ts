import { Injectable } from "@nestjs/common";
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

  findOne(id: string): Promise<Project> {
    return this.prisma.project.findUnique({ where: { id }});
  }

  create(dto:CreateProjectDto): Promise<Project> {

    const data: Project = {...dto}

    return this.prisma.project.create({ data });
  }

  update(id: string, dto: UpdateUpdateDto): Promise<Project> {
    const data: Partial<Project> = {...dto}

    return this.prisma.project.update({
      where: { id },
      data
    })
  }
}
