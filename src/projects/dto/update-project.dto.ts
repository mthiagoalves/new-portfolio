import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';


export class UpdateUpdateDto extends PartialType(CreateProjectDto) {}
