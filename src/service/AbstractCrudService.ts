import AbstractEntity from "../model/AbstractEntity";
import AbstractDTO from "../payload/AbstractDTO";
import { Repository } from "typeorm";
import AbstractMapper from "../mapper/AbstractMapper";

export default abstract class AbstractCrudService<
  T extends AbstractEntity,
  D extends AbstractDTO,
> {
  protected abstract getRepository(): Repository<T>;

  protected abstract getMapper(): AbstractMapper<T, D>;

  async create(dto: D) {
    const t = this.getMapper().toEntity(dto);

    await this.getRepository().save(t);

    return dto;
  }

  async findAll(): Promise<T[]> {
    return await this.getRepository().find();
  }

  async findOne(_id: number): Promise<T | null> {
    // @ts-ignore
    return await this.getRepository().findOneBy({ _id });
  }

  async update(id: number, dto: D) {
    const t = this.getMapper().toEntity(dto);

    // @ts-ignore
    await this.getRepository().update(id, t);

    return dto;
  }

  async remove(id: number) {
    return await this.getRepository().delete(id);
  }
}
