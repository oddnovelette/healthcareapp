export class Record {
  constructor(
    public patient: number,
    public date: string,
    public text: string,
    public id?: string,
    public recText?: string
  ) {}
}
