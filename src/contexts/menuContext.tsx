import { createContext, Dispatch, useReducer } from "react";
import {
  IChildren,
  IMenuAction,
  IMenuOrdersColumn,
} from "../common/constants/interface";
import { MenuEnum } from "../common/constants/enum";
import { menuOrdersColumn } from "../fakeData";

export const MenuContext = createContext<IMenuOrdersColumn[]>(menuOrdersColumn);
export const MenuDispatch = createContext<Dispatch<IMenuAction>>(() => {});

export const MenuProvider = ({ children }: IChildren) => {
  const [menu, dispatch] = useReducer(menuReducer, menuOrdersColumn);

  return (
    <MenuContext.Provider value={menu}>
      <MenuDispatch.Provider value={dispatch}>{children}</MenuDispatch.Provider>
    </MenuContext.Provider>
  );
};

function menuReducer(menu: IMenuOrdersColumn[], action: IMenuAction) {
  switch (action.type) {
    case MenuEnum.SELECT: {
      menu.map((item) => {
        if (item.ordersColumnId === action.ordersColumnId)
          item.tableId = action.tableId;
        return item;
      });

      localStorage.setItem(
        "orders",
        JSON.stringify([
          {
            billId: action.tableId,
            ordersColumnId: action.ordersColumnId,
          },
        ])
      );

      return [...menu];
    }

    case MenuEnum.CANCEL: {
      menu.map((item) => {
        if (item.ordersColumnId === action.ordersColumnId)
          item.tableId = action.tableId;

        return item;
      });

      localStorage.removeItem("orders");

      return [...menu];
    }

    default: {
      return menu;
    }
  }
}
