import useApi from "./useApi";

export default function useAuthApi(clientKey: string) {
  const { api } = useApi(false);

  const login = (
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
