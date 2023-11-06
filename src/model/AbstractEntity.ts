import {PrimaryGeneratedColumn} from "typeorm";

export default abstract class AbstractEntity {
    @PrimaryGeneratedColumn()
    protected _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
