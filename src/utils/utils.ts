export type ActionType<T> ={
    type: string;
    payload: T
}

export type DataResponse<T> = {
    status: boolean;
    data: T
}