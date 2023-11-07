import CatEntity from './cat.entity';
import CatDto from './cat.dto';
import { Injectable } from '@nestjs/common';
import AbstractMapper from 'nest-crud-abstraction/dist/mapper/AbstractMapper';

@Injectable()
export default class CatMapper extends AbstractMapper<CatEntity, CatDto> {
  toDTO(entity: CatEntity): CatDto {
    const sampleDTO = new CatDto();

    sampleDTO.breed = entity.breed;
    sampleDTO.color = entity.color;

    return sampleDTO;
  }

  toEntity(dto: CatDto): CatEntity {
    const sampleEntity = new CatEntity();

    sampleEntity.breed = dto.breed;
    sampleEntity.color = dto.color;

    return sampleEntity;
  }
}
