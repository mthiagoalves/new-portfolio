import { Controller, Get } from "@nestjs/common";

@Controller('project')
export class ProjectController{

  @Get()
  findAll() {
    return 'Get all projects';
  }
}
