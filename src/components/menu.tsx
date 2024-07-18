import { useSearchParams } from "react-router-dom";
import { TitleText } from "./title";
import { useContext } from "react";
import { MenuContext, MenuDispatch } from "../contexts/menuContext";
import { MenuEnum } from "../common/constants/enum";

export default function Menu() {
  const [searchParams] = useSearchParams();
  const billId = searchParams.get("billId");
  const menuContext = useContext(MenuContext);
  const menuDispatch = useContext(MenuDispatch);

  const onSelectOrder = (id: number) => {
    const findId = menuContext.find((item) => item.ordersColumnId === id);

    if (!findId?.tableId) {
      menuDispatch({
        ordersColumnId: id,
        tableId: Number(billId),
        type: MenuEnum.SELECT,
      });
    } else {
      menuDispatch({
        ordersColumnId: id,
        tableId: null,
        type: MenuEnum.CANCEL,
      });
    }
  };

  return (
    <>
      <TitleText title="Menu" />
      {billId ? (
        <div className="flex px-2 gap-5 lg:h-[500px] h-[180px]">
          <div className="w-[35%] h-full">
            <p className="text-sm mb-1">Orders</p>
            {menuContext.map((item) => {
              return (
                <div
                  className="w-full h-full border-[1px] border-slate-300 py-2 rounded"
                  key={item.ordersColumnId}
                >
                  <p
                    className={`text-sm p-2 cursor-pointer ${
                      localStorage.getItem("orders")
                        ? "bg-sky-300 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => onSelectOrder(item.ordersColumnId)}
                  >
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[35%] h-full">
            <p className="text-sm mb-1">Menu</p>
            <div className="w-full h-full border-[1px] border-slate-300 py-2 rounded"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
