import { useContext } from "react";
import { TableContext } from "../contexts/TableContext";
import { Link } from "react-router-dom";
import { LOCATION_TABLE_PATH } from "../common/constants/path";

const NumberTable = ({
  numberTable,
  tableId,
}: {
  numberTable: string;
  tableId: number;
}) => {
  return (
    <Link
      to={`${LOCATION_TABLE_PATH}/${tableId}`}
      className={`text-sm location-table border-[1px] p-2 rounded cursor-pointer`}
    >
      {numberTable}
    </Link>
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
