import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';


export class UpdateUpdateDto extends PartialType(CreateProjectDto) {}
