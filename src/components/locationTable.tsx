import { useContext } from "react";
import { OrderContext } from "../contexts/orderContext";
import { INumberTable } from "../common/constants/interface";
import { useSearchParams } from "react-router-dom";

const NumberTable = ({
  numberTable,
  isActive,
}: {
  numberTable?: number;
  isActive?: boolean;
}) => {
  const [, setSearchParam] = useSearchParams();

  const onChoose = () => {
    setSearchParam({ billId: numberTable?.toString() ?? "" });
  };

  return (
    <div
      className={`location-table border-[1px] ${
        isActive ? "border-green-600" : "border-slate-500"
      } p-2 rounded cursor-pointer`}
      onClick={onChoose}
    >
      <p
        className={`text-sm ${isActive ? "text-green-600" : "text-slate-500"}`}
      >
        Number table: {numberTable}
      </p>
    </div>
  );
};

export default function LocationTable() {
  const orderContext: Partial<INumberTable>[] = useContext(OrderContext);

  const tables = orderContext.map((table) => {
    return (
      <NumberTable
        numberTable={table.number}
        isActive={table.isActive}
        key={table.tableId}
      />
    );
  });

  return <div className="flex flex-wrap gap-3 px-2 mt-2">{tables}</div>;
}
