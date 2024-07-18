export type ObjectType<T> = {
    [K in keyof T]: T[K];
};

export type NumberTableType = number | string;
