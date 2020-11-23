export default class RoomPositionMock {
  public roomName: string;
  public x: number;
  public y: number;
  public isEqualTo(x: number, y: number): boolean {
    return x === this.x && y === this.y ? true : false;
  }
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}