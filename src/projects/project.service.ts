import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";

@Injectable()
export class ProjectService {

  findAll() {
    return 'Get all projects';
  }

  create(createProjectDto:CreateProjectDto) {
    return 'Create one project' + JSON.stringify(createProjectDto);
  }
}
