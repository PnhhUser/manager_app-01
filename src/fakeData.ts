import { IColumnTable, IMenuOrdersColumn, INumberTable } from "./common/constants/interface";

export const th: IColumnTable[] = [
    {
        title: "Order",
        dataIndex: "order",
        key: "order",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        width: "25%",
    },
    {
        title: "Prices",
        dataIndex: "prices",
        key: "prices",
        width: "25%",
    },
];

export const numberTables: Partial<INumberTable>[] = [
    {
        tableId: 1,
        number: 1,
        isActive: false,
        billId: null,
    },
    {
        tableId: 2,
        number: 2,
        isActive: false,
        billId: null,
    },
    {
        tableId: 3,
        number: 3,
        isActive: false,
        billId: null,
    },
];

export const menuOrdersColumn: IMenuOrdersColumn[] = [
    {
        ordersColumnId: 1,
        name: "juice",
        tableId: null
    }
];

export const menuColumn = [
    {
        menuColumnId: 1,
        name: "juice orange",
        ordersColumnId: 1,
        tableId: null
    },
    {
        menuColumnId: 2,
        name: "juice watermelon",
        ordersColumnId: 1,
        tableId: null
    }
]