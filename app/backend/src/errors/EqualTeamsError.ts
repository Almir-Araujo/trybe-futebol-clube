export default class EqualTeamsError extends Error {
  public status: number;
  constructor(message: string) {
    super(message);
    this.status = 422;
  }
}
