import AbstractDTO from 'nest-crud-abstraction/dist/payload/AbstractDTO';

export default class CatDto extends AbstractDTO {
  private _breed: string;
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
