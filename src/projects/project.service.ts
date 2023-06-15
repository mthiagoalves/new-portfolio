import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./entity/project.entity";

@Injectable()
export class ProjectService {
  projects: Project[] = [];

  findAll() {
    return 'Get all projects';
  }

  create(createProjectDto:CreateProjectDto) {

    const project: Project = {id: 'random_id', ...createProjectDto}

    this.projects.push(project);

    return project;
  }
}
