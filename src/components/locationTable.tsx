import { useContext } from "react";
import { TableContext } from "../contexts/TableContext";
import { useSearchParams } from "react-router-dom";

const NumberTable = ({
  numberTable,
  tableId,
}: {
  numberTable: string;
  tableId: number;
}) => {
  const [, setSearchParams] = useSearchParams();

  const onChoose = () => {
    setSearchParams({ tableId: tableId.toString() });
  };

  return (
    <div
      className={`location-table border-[1px] p-2 rounded cursor-pointer`}
      onClick={onChoose}
    >
      <p className={`text-sm `}>{numberTable}</p>
    </div>
  );
};

export default function LocationTable() {
  const tableContext = useContext(TableContext);

  const tables = tableContext.map((table) => (
    <NumberTable
      numberTable={table.tableName}
      tableId={table.tableId}
      key={table.tableId}
    />
  ));

  return <div className="flex flex-wrap gap-3 px-2 mt-2">{tables}</div>;
}
