import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Technology')
@Controller('technology')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  @Post()
  @ApiOperation({
    summary: 'Add new technology'
  })
  create(@Body() createTechnologyDto: CreateTechnologyDto) {
    return this.technologyService.create(createTechnologyDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all technologies'
  })
  findAll() {
    return this.technologyService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find specific technology'
  })
  findOne(@Param('id') id: string) {
    return this.technologyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit specific technology for id'
  })
  update(@Param('id') id: string, @Body() updateTechnologyDto: UpdateTechnologyDto) {
    return this.technologyService.update(id, updateTechnologyDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete technology for id'
  })
  delete(@Param('id') id: string) {
    return this.technologyService.delete(id);
  }
}
