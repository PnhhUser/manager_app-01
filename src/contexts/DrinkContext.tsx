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
        ?.drinksType.map((drinkType) => {
          if (drinkType.drinkTypeId === action.drinkTypeId) {
            // types
            drinkType.isActive = action.isActive;

            // drink
            const drinks = drinkType.drinks.find(
              (drink) => drink.drinkId === action.drinkId
            );

            if (drinks) {
              drinks.isActive = action.isActive;
            }
          } else {
            drinkType.isActive = !action.isActive;
          }
        });

      return [...tables];
    }

    case DrinkActionEnum.DEACTIVE: {
      tables
        .find((table) => table.tableId === action.tableId)
        ?.drinksType.map((drinkType) => {
          if (drinkType.drinkTypeId === action.drinkTypeId) {
            // type
            drinkType.isActive = action.isActive;

            // drinks
            const drinks = drinkType.drinks.find(
              (drink) => drink.drinkId === action.drinkId
            );

            if (drinks) {
              drinks.isActive = action.isActive;
              drinkType.isActive = true;
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
