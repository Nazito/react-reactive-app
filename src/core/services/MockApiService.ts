import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { injectable } from "tsyringe";

@injectable()
class MockApiService {
  login(password: string, email: string) {
    const isSuccess = password === "password" && email === "test@test.com";
    return of({ success: isSuccess }).pipe(delay(1000));
  }
}

export default MockApiService;
