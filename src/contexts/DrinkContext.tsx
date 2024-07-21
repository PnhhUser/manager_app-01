import { createContext, Dispatch, useReducer } from "react";
import {
  IChildren,
  INumberTable,
  IOrderAction,
} from "../common/constants/interface";
import { DrinkActionEnum } from "../common/constants/enum";
import { drinksJuice, tables } from "../fakeData";

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
    case DrinkActionEnum.TOGGLE_DRINK: {
      const table = tables.find((t) => t.tableId === action.tableId)!;

      const drink = drinksJuice.find(
        (drink) => drink.drinkId === action.drinkId
      )!;
      // drink
      const drinks = drinksJuice
        .map((item) => {
          if (item.drinkId === action.drinkId) {
            item.isActive = action.isActive;
          }
          return item;
        })
        .filter((item) => item.drinkTypeId === drink.drinkTypeId);

      table.drinksType.map((item) => {
        if (item.drinkTypeId === drink.drinkTypeId) {
          item.drinks = drinks;
        }
      });

      // type
      table.drinksType.map((item) => {
        if (item.drinkTypeId === drink.drinkTypeId) {
          if (
            item.drinks.filter((item) => item.isActive === true).length === 0
          ) {
            item.isActive = false;
          } else {
            item.isActive = true;
          }
        }
      });

      return [...tables];
    }

    default: {
      return tables;
    }
  }
}
