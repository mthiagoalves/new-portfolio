import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { ApiTags } from "@nestjs/swagger";
import { Project } from "./entity/project.entity";

@ApiTags('Projects')
@Controller('project')
export class ProjectController{
constructor(private readonly projectService: ProjectService){}

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get()
  

  @Post()
  create(@Body() dto:CreateProjectDto): Promise<Project> {
    return this.projectService.create(dto);
  }
}
