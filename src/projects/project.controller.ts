import { Body, Controller, Get, Param, Patch, Post, Delete, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Project } from "./entity/project.entity";
import { UpdateUpdateDto } from "./dto/update-project.dto";
import { AuthGuard } from '@nestjs/passport';

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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific project'
  })
  delete(@Param('id') id: string) {
    this.projectService.delete(id);
  }
}
