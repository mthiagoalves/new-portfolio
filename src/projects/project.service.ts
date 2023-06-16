import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./entity/project.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma:PrismaService) {}

  findAll() {
    return this.prisma.project.findMany();
  }

  create(dto:CreateProjectDto) {

    const data: Project = {...dto}

    return this.prisma.project.create({ data });
  }
}
