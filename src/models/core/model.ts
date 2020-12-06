export default class Model {
  private _data: any;
  constructor (data: any) {
    this._data = data;
  }

  get (key) {
    return this._data[key];
  }
}