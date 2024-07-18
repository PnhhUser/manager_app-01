import { MouseEventHandler, ReactNode } from "react";
import { NumberTableType } from "./type";
import { TableActionEnum, DrinkActionEnum } from "./enum";

export interface ITable<T> {
    db: T;
    th: T;
}

export interface ITableUser<T> extends ITable<T> { }
export interface ITableBills<T> extends ITable<T> { }

export interface IAction<T> {
    type?: T,
}

export interface IChildren {
    children: ReactNode;
}

export interface ITitle {
    title?: string;
    number?: NumberTableType;
}

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

export interface ITableAction extends IAction<TableActionEnum> {

}

export interface IOrderAction extends IAction<DrinkActionEnum> {
    isActive: boolean;
    drinkTypeId: number;
    tableId: number;
}

export interface INumberTable {
    tableId: number;
    tableName: string;
    drinksType: IDrinksType[];
    isActive: boolean;
}

export interface IDrinksType {
    drinkTypeId: number;
    drinkTypeName: string;
    isActive: boolean;
    drinks: IDrinks[];
}

export interface IDrinks {
    drinkId: number;
    drinkName: string;
    isActive: boolean;
    drinkTypeId: number;
}

export interface IBtnDefault {
    name: string;
    className: string;
    color?: string;
    onEvent: MouseEventHandler;
}

export interface ITableHeadBill {
    title: string,
    dataIndex: string,
    key: string,
    width?: string
}

