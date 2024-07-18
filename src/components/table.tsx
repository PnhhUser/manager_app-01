import { Table } from "antd";
import { ITableBills } from "../common/constants/interface";
import { ObjectType } from "../common/constants/type";

function TableBills({ db, th }: ITableBills<ObjectType<object>[]>) {
  return (
    <Table
      dataSource={db}
      columns={th}
      pagination={false}
      scroll={{ y: 200 }}
      bordered
      size="small"
    />
  );
}

export { TableBills };
