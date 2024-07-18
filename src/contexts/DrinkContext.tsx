import { createContext, Dispatch, useReducer } from "react";
import {
  IChildren,
  INumberTable,
  IOrderAction,
} from "../common/constants/interface";
import { DrinkActionEnum } from "../common/constants/enum";
import { tables } from "../fakeData";

export const DrinkContext = createContext<INumberTable[]>(tables);
export const DrinkDispatch = createContext<Dispatch<IOrderAction>>(() => {});

export const DrinkProvider = ({ children }: IChildren) => {
  const [table, dispatch] = useReducer(drinkReducer, tables);

  return (
    <DrinkContext.Provider value={table}>
      <DrinkDispatch.Provider value={dispatch}>
        {children}
      </DrinkDispatch.Provider>
    </DrinkContext.Provider>
  );
};

function drinkReducer(tables: INumberTable[], action: IOrderAction) {
  switch (action.type) {
    case DrinkActionEnum.ACTIVE: {
      tables
        .find((table) => table.tableId === action.tableId)
        ?.drinksType.map((drink) => {
          if (drink.drinkTypeId === action.drinkTypeId) {
            drink.isActive = action.isActive;
          }
        });

      return [...tables];
    }

    case DrinkActionEnum.DEACTIVE: {
      tables
        .find((table) => table.tableId === action.tableId)
        ?.drinksType.map((drink) => {
          if (drink.drinkTypeId === action.drinkTypeId) {
            drink.isActive = action.isActive;
          }
        });
      return [...tables];
    }

    default: {
      return tables;
    }
  }
}
