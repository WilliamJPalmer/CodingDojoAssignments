export class User {
  constructor(
    public fname: string = "",
    public lname: string = "",
    public email: string = "",
    public password: string = "",
    public passwordconfirm: string = "",
    public street: string = "",
    public unit: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
