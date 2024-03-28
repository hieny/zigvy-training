export type ActionType<T> ={
    type: string;
    payload: T
}

export type Pagination = {
    currentPage: number;
    skip: number;
    totalPage: number;
}

export type DataResponse<T>= {
    status: boolean;
    data: T;
    pagination?: Pagination
}