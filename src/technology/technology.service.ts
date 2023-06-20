import { Injectable } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';

@Injectable()
export class TechnologyService {
  create(createTechnologyDto: CreateTechnologyDto) {
    return 'This action adds a new technology';
  }

  findAll() {
    return `This action returns all technology`;
  }

  findOne(id: string) {
    return `This action returns a #${id} technology`;
  }

  update(id: string, updateTechnologyDto: UpdateTechnologyDto) {
    return `This action updates a #${id} technology`;
  }

  delete(id: string) {
    return `This action removes a #${id} technology`;
  }
}
