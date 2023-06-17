import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Project } from "./entity/project.entity";
import { UpdateUpdateDto } from "./dto/update-project.dto";

@ApiTags('Projects')
@Controller('project')
export class ProjectController{
constructor(private readonly projectService: ProjectService){}

  @Get()
  @ApiOperation({
    summary: 'Get all projects'
  })
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find a specific project'
  })
  findOne(@Param('id') id:string): Promise<Project>{
    return this.projectService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new project'
  })
  create(@Body() dto:CreateProjectDto): Promise<Project> {
    return this.projectService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific project'
  })
  update(@Param('id') id: string, @Body() dto: UpdateUpdateDto): Promise<Project> {
    return this.projectService.update(id, dto);
  }
}
