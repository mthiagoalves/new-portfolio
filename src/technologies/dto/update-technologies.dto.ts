import { PartialType } from '@nestjs/swagger';
import { CreateTechnologiesDto } from './create-technologies.dto';

export class UpdateTechnologiesDto extends PartialType(CreateTechnologiesDto) {}
