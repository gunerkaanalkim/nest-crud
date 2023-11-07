import { Controller } from '@nestjs/common';
import { CatService } from './cat.service';
import CatEntity from './cat.entity';
import CatDto from './cat.dto';
import AbstractController from 'nest-crud-abstraction/dist/controller/AbstractController';
import AbstractCrudService from 'nest-crud-abstraction/dist/service/AbstractCrudService';

@Controller('/cats')
export class CatController extends AbstractController<CatEntity, CatDto> {
  constructor(private readonly appService: CatService) {
    super();
  }

  protected getService(): AbstractCrudService<CatEntity, CatDto> {
    return this.appService;
  }
}
