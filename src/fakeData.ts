import { IDrinks, IDrinksType, INumberTable, ITableHeadBill } from "./common/constants/interface";

export const th: ITableHeadBill[] = [
    {
        title: "Drink",
        dataIndex: "drink",
        key: "drink",
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

export const drinksJuice: IDrinks[] = [
    {
        drinkId: 1,
        drinkName: "juice orange",
        isActive: false,
        drinkTypeId: 1,
    },
    {
        drinkId: 2,
        drinkName: "juice watermelon",
        isActive: false,
        drinkTypeId: 1,
    },
    {
        drinkId: 3,
        drinkName: "egg coffee",
        isActive: false,
        drinkTypeId: 2,
    }
]


export const drinksType: IDrinksType[] = [
    {
        drinkTypeId: 1,
        drinkTypeName: "juice",
        isActive: false,
        drinks: JSON.parse(JSON.stringify(drinksJuice.filter(item => item.drinkTypeId === 1)))
    },
    {
        drinkTypeId: 2,
        drinkTypeName: "coffee",
        isActive: false,
        drinks: JSON.parse(JSON.stringify(drinksJuice.filter(item => item.drinkTypeId === 2)))
    },
    {
        drinkTypeId: 3,
        drinkTypeName: "tea",
        isActive: false,
        drinks: []
    }
];


export const tables: INumberTable[] = [
    {
        tableId: 1,
        tableName: "Number table 1",
        drinksType: JSON.parse(JSON.stringify(drinksType)),
        isActive: false,
    },
    {
        tableId: 2,
        tableName: "Number table 2",
        drinksType: JSON.parse(JSON.stringify(drinksType)),
        isActive: false,
    },
    {
        tableId: 3,
        tableName: "Number table 3",
        drinksType: JSON.parse(JSON.stringify(drinksType)),
        isActive: false,
    },
];
