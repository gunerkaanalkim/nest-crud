import AbstractEntity from "../model/AbstractEntity";
import AbstractDTO from "../payload/AbstractDTO";
import {Repository} from "typeorm";
import AbstractMapper from "../mapper/AbstractMapper";

export default abstract class AbstractCrudService<
    T extends AbstractEntity,
    D extends AbstractDTO,
> {
    protected abstract getRepository(): Repository<T>;

    protected abstract getMapper(): AbstractMapper<T, D>;

    create(dto: T) {
        this.getRepository().create(dto);
    }

    findAll(): Promise<T[]> {
        return this.getRepository().find();
    }

    findOne(id: number): Promise<T | null> {
        // @ts-ignore
        return this.getRepository().findByI({id});
    }

    update(id: number, dto: D) {
        const t = this.getMapper().toEntity(dto);

        // @ts-ignore
        return this.getRepository().update(id, t);
    }

    remove(id: number) {
        return this.getRepository().delete(id)
    }
}
