import { describe, it, expect, vi, beforeEach } from "vitest";
import { of } from "rxjs";
import { firstValueFrom } from "rxjs";
import AuthService from "../AuthService";
import MockApiService from "../MockApiService";

vi.mock("../MockApiService");

describe("AuthService", () => {
  let mockApiService: MockApiService;
  let authService: AuthService;

  beforeEach(() => {
    mockApiService = new MockApiService();
    authService = new AuthService(mockApiService);
  });

  it("should login successfully", async () => {
    vi.spyOn(mockApiService, "login").mockReturnValueOnce(
      of({ success: true })
    );

    const result = await firstValueFrom(
      authService.login("user", "password", "user@example.com")
    );
    expect(result).toBe(true);

    const isAuthenticated = await firstValueFrom(authService.getAuthStatus());
    expect(isAuthenticated).toBe(true);

    const currentUser = await firstValueFrom(authService.getCurrentUser());
    expect(currentUser).toEqual({
      username: "user",
      email: "user@example.com",
    });
  });

  it("should fail to login with wrong credentials", async () => {
    vi.spyOn(mockApiService, "login").mockReturnValueOnce(
      of({ success: false })
    );

    const result = await firstValueFrom(
      authService.login("user", "wrongpassword", "user@example.com")
    );
    expect(result).toBe(false);

    const isAuthenticated = await firstValueFrom(authService.getAuthStatus());
    expect(isAuthenticated).toBe(false);

    const currentUser = await firstValueFrom(authService.getCurrentUser());
    expect(currentUser).toBe(null);
  });

  it("should logout correctly", async () => {
    authService.logout();

    const isAuthenticated = await firstValueFrom(authService.getAuthStatus());
    expect(isAuthenticated).toBe(false);

    const user = await firstValueFrom(authService.getCurrentUser());
    expect(user).toBe(null);
  });
});
