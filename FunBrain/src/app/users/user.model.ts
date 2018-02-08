export class UserModel {
  id: string;
  name: string;
  email: string;

  constructor(obj: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.email = obj && obj.email || null;
  }
}
