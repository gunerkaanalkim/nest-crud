import AbstractEntity from "../model/AbstractEntity";
import AbstractDTO from "../payload/AbstractDTO";

export default abstract class AbstractCrudService<
    T extends AbstractEntity,
    D extends AbstractDTO,
> {
    protected abstract getRepository(): any;

    create() {}

    findAll(): string {
        return 'find all';
    }

    findOne(id: number) {
        return id;
    }

    update(id: number, dto: D) {
        return id;
    }

    remove(id: number) {
        return id;
    }
}
