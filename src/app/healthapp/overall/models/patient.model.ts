export class Patient {
  constructor(
    public name: string,
    public birthdate: number,
    public sex: string,
    public country: string,
    public state: string,
    public address: string,
    public id?: number
  ) {}
}
