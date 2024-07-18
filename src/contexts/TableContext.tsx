import { createContext, Dispatch, useReducer } from "react";
import {
  ITableAction,
  INumberTable,
  IChildren,
} from "../common/constants/interface";
import { TableActionEnum } from "../common/constants/enum";
import { tables } from "../fakeData";

export const TableContext = createContext<INumberTable[]>(tables);
export const TableDispatch = createContext<Dispatch<ITableAction>>(() => {});

export const TableProvider = ({ children }: IChildren) => {
  const [table, dispatch] = useReducer(tableReduce, tables);

  return (
    <TableContext.Provider value={table}>
      <TableDispatch.Provider value={dispatch}>
        {children}
      </TableDispatch.Provider>
    </TableContext.Provider>
  );
};

function tableReduce(table: INumberTable[], action: ITableAction) {
  switch (action.type) {
    case TableActionEnum.ACTIVE_TABLE: {
      return [...table];
    }

    case TableActionEnum.DEACTIVE_TABLE: {
      return [...table];
    }

    default: {
      return table;
    }
  }
}
