export type CreateNewChatType = {
  to: string;
};

export type ReactQueryResponseType<T> = {
  data: T;
  status: "success" | "error" | "loading";
  error?: unknown;
  isFetching: boolean;
  isStale: boolean;
  isSuccess: boolean;
};
