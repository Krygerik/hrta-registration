// type CursorType = 'default' | 'pointer' | 'none';

export class Graphics {
  _cursor = 'none';

  get cursor() {
    return this._cursor;
  }

  set cursor(value) {
    this._cursor = value;
  }
}
