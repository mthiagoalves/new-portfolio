import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologiesDto } from './dto/create-technologies.dto';
import { UpdateTechnologiesDto } from './dto/update-technologies.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Technologies')
@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all technologies'
  })
  findAll() {
    return this.technologiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find specific technologies'
  })
  findOne(@Param('id') id: string) {
    return this.technologiesService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Add new technologies'
  })
  create(@Body() createTechnologyDto: CreateTechnologiesDto) {
    return this.technologiesService.create(createTechnologyDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit specific technologies for id'
  })
  update(@Param('id') id: string, @Body() updateTechnologyDto: UpdateTechnologiesDto) {
    return this.technologiesService.update(id, updateTechnologyDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete technologies for id'
  })
  delete(@Param('id') id: string) {
    return this.technologiesService.delete(id);
  }
}
