import { BehaviorSubject } from "rxjs";

import { injectable } from "tsyringe";

export interface User {
  username: string;
  email: string;
}

@injectable()
class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public get currentUser() {
    return this.currentUserSubject.asObservable();
  }

  public login(username: string, password: string) {
    console.log(password, 999);
    const user: User = { username, email: "test@example.com" };
    this.currentUserSubject.next(user);
  }

  public logout() {
    this.currentUserSubject.next(null);
  }
}

export default AuthService;
