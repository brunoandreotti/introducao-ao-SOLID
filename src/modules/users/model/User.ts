import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(name?: string, email?: string) {
    this.id = uuidV4();
    this.name = name;
    this.admin = false;
    this.email = email;
  }
}

export { User };
