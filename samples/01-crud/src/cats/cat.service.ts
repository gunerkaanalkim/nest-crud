import {Injectable} from '@nestjs/common';
import CatEntity from './cat.entity';
import CatDto from './cat.dto';
import AbstractCrudService from 'nest-crud-abstraction/dist/service/AbstractCrudService';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import CatMapper from './cat.mapper';
import AbstractMapper from "../../../../dist/mapper/AbstractMapper";

@Injectable()
export class CatService extends AbstractCrudService<
    CatEntity,
    CatDto
> {
    constructor(
        @InjectRepository(CatEntity)
        private usersRepository: Repository<CatEntity>,
        private readonly catMapper: CatMapper,
    ) {
        super();
    }

    protected getRepository(): Repository<CatEntity> {
        return this.usersRepository;
    }

    protected getMapper(): AbstractMapper<CatEntity, CatDto> {
        return this.catMapper;
    }
}
