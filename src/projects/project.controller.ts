import { Controller, Get, Post } from "@nestjs/common";

@Controller('project')
export class ProjectController{

  @Get()
  findAll() {
    return 'Get all projects';
  }

  @Post()
  create() {
    return 'Create one project';
  }
}
