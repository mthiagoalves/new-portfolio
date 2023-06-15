import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectService {

  findAll() {
    return 'Get all projects';
  }

  create() {
    return 'Create one project';
  }
}
