import { MouseEventHandler, ReactNode } from "react";
import { NumberTableType } from "./type";
import { MenuEnum, OrderEventEnum } from "./enum";

export interface ITable<T> {
    db: T;
    th: T;
}

export interface ITableUser<T> extends ITable<T> { }
export interface ITableBills<T> extends ITable<T> { }


export interface IPropsNav {
    toggleNav: MouseEventHandler<HTMLElement>;
    isToggle: boolean;
}

export interface IPropsNavLink {
    linkName: string;
    pathName: string;
    isToggle: boolean;
    icon: ReactNode;
}

export interface ITitle {
    title?: string;
    number?: NumberTableType;
}

export interface IAction<T> {
    type?: T,
}

export interface IOrderAction extends IAction<OrderEventEnum> {
    tableId: number;
    isActive: boolean;
    isDeactive: boolean;
}

export interface IMenuAction extends IAction<MenuEnum> {
    tableId: number | null;
    ordersColumnId: number
}

export interface INumberTable {
    tableId: number;
    number: number;
    isActive?: boolean;
    billId: number | null;
}

export interface IDataOrder<T> {
    data: T
}

export interface IBtnDefault {
    name: string;
    className: string;
    color?: string;
    onEvent: MouseEventHandler;
}

export interface IColumnTable {
    title: string,
    dataIndex: string,
    key: string,
    width?: string
}

export interface IMenuOrdersColumn {
    ordersColumnId: number;
    name: string;
    tableId: number | null;
}

export interface IChildren {
    children: ReactNode;
}