import AbstractEntity from 'nest-crud-abstraction/dist/model/AbstractEntity';
import {Column, Entity} from 'typeorm';

@Entity({name: 'cats'})
export default class CatEntity extends AbstractEntity {
    @Column({name: 'name'})
    private _breed: string;

    @Column({name: 'color'})
    private _color: string;


    get breed(): string {
        return this._breed;
    }

    set breed(value: string) {
        this._breed = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}
