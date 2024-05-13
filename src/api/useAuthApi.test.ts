import useApi from "./useApi";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useAuthApi", () => {
  const clientKey = "demo";
  const username = "ehinton";
  const password = "UPw0rk";
  const timeout = 60000;

  test("should call api.post with correct parameters when login is called", async () => {
    const mockApi = {
      post: jest.fn(),
    };

    jest.mock("./useApi", () => ({
      __esModule: true,
      default: () => ({ api: mockApi }),
    }));

    const { result } = renderHook(() => useAuthApi(clientKey));

    await act(async () => {
      await result.current.login(username, password, timeout);
    });

    expect(mockApi.post).toHaveBeenCalledWith(
      `/login/${clientKey}/${username}/${timeout}`,
      password,
      { headers: { "Content-Type": "plain-text" } }
    );
  });
});

interface Api {
  post: (
    url: string,
    data: any,
    config?: { headers: { [key: string]: string } }
  ) => Promise<any>;
}

interface AuthApi {
  login: (username: string, password: string, timeout?: number) => Promise<any>;
}

function useAuthApi(clientKey: string): AuthApi {
  const { api }: { api: Api } = useApi(false);

  const login = async (
    username: string,
    password: string,
    timeout: number = 60000
  ) => {
    return api.post(`/login/${clientKey}/${username}/${timeout}`, password, {
      headers: { "Content-Type": "plain-text" },
    });
  };

  return { login };
}
