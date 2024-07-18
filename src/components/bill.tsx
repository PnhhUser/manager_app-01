import { useContext } from "react";
import { TitleBill } from "./title";
import { OrderContext, OrderDispatch } from "../contexts/orderContext";
import { useSearchParams } from "react-router-dom";
import { OrderEventEnum } from "../common/constants/enum";
import { BtnDefault, BtnBorder } from "./btnDefault";
import { TableBills } from "./table";
import { th } from "../fakeData";

export default function Bill() {
  const orderContext = useContext(OrderContext);
  const orderDispatch = useContext(OrderDispatch);
  const [searchParams, setSearchParam] = useSearchParams();
  const billId = searchParams.get("billId");

  const onActive = () => {
    orderDispatch({
      type: OrderEventEnum.ACTIVE_TABLE,
      tableId: Number(billId),
      isActive: true,
    });
  };

  const onDeactive = () => {
    orderDispatch({
      type: OrderEventEnum.DEACTIVE_TABLE,
      tableId: Number(billId),
      isDeactive: false,
    });
    setSearchParam();
  };

  const findId = orderContext.find((item) => item.number === Number(billId));

  const onCancel = () => {
    setSearchParam();
  };

  return (
    <div className="px-2 relative w-full h-full">
      {/* title */}
      <TitleBill number={billId ?? ""} />

      {/* content */}
      <div className="">
        {Number(billId) ? <TableBills th={th} db={[]} /> : null}
      </div>

      {/* button */}
      {Number(billId) ? (
        <div className="absolute bottom-2 left-0 clear-both w-full px-2">
          {findId?.isActive ? (
            <BtnDefault
              className="mx-1 float-right"
              color="#5ab4ff"
              onEvent={onDeactive}
              name="Paying"
            />
          ) : (
            <BtnDefault
              className="mx-1 float-right"
              color="#00b96b"
              onEvent={onActive}
              name="Order"
            />
          )}
          <BtnBorder
            className="mx-1 float-right"
            onEvent={onCancel}
            name="Cancel"
          />
        </div>
      ) : null}
    </div>
  );
}

// #ff4d4f
