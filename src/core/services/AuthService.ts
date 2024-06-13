import { BehaviorSubject, Observable } from "rxjs";
import { injectable, inject } from "tsyringe";
import MockApiService from "./MockApiService";

@injectable()
class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<{
    username: string;
    email: string;
  } | null>(null);

  constructor(@inject(MockApiService) private mockApiService: MockApiService) {}

  login(
    username: string,
    password: string,
    email: string
  ): Observable<boolean> {
    return new Observable((subscriber) => {
      this.mockApiService.login(password, email).subscribe((response) => {
        if (response.success) {
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next({ username, email });
        } else {
          this.isAuthenticatedSubject.next(false);
          this.currentUserSubject.next(null);
        }
        subscriber.next(response.success);
        subscriber.complete();
      });
    });
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getCurrentUser(): Observable<{
    username: string;
    email: string;
  } | null> {
    return this.currentUserSubject.asObservable();
  }
}

export default AuthService;
