import { createContext, Dispatch, useReducer } from "react";
import {
  IOrderAction,
  INumberTable,
  IChildren,
} from "../common/constants/interface";
import { OrderEventEnum } from "../common/constants/enum";
import { numberTables } from "../fakeData";

export const OrderContext = createContext<Partial<INumberTable>[]>([]);
export const OrderDispatch = createContext<Dispatch<Partial<IOrderAction>>>(
  () => {}
);

export const OrderProvider = ({ children }: IChildren) => {
  const [order, dispatch] = useReducer(orderReduce, numberTables);

  return (
    <OrderContext.Provider value={order}>
      <OrderDispatch.Provider value={dispatch}>
        {children}
      </OrderDispatch.Provider>
    </OrderContext.Provider>
  );
};

function orderReduce(
  order: Partial<INumberTable>[],
  action: Partial<IOrderAction>
) {
  switch (action.type) {
    case OrderEventEnum.ACTIVE_TABLE: {
      order.map((item) => {
        if (item.number === action.tableId) item.isActive = action.isActive;
        return item;
      });

      return [...order];
    }

    case OrderEventEnum.DEACTIVE_TABLE: {
      order.map((item) => {
        if (item.number === action.tableId) item.isActive = action.isDeactive;
        return item;
      });
      return [...order];
    }
    default: {
      return order;
    }
  }
}
