import { Controller, Get, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";

@Controller('project')
export class ProjectController{
constructor(private readonly projectService: ProjectService){}
  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Post()
  create() {
    return this.projectService.create();
  }
}
