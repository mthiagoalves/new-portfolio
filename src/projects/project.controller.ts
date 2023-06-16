import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Projects')
@Controller('project')
export class ProjectController{
constructor(private readonly projectService: ProjectService){}

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Post()
  create(@Body() createProjectDto:CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }
}
