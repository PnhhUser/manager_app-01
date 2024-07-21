import { TitleBill } from "./title";
import { BtnDefault, BtnBorder } from "./btnDefault";
import { TableBills } from "./table";
import { th } from "../fakeData";
import { useParams } from "react-router-dom";

export default function Bill() {
  const { tableId } = useParams();

  const onActive = () => {};

  const onDeactive = () => {};

  const onCancel = () => {};

  return (
    <div className="px-2 relative w-full h-full">
      {/* title */}
      <TitleBill number={tableId} />

      {/* content */}
      <div className="">
        <TableBills th={th} db={[]} />
      </div>

      {/* button */}

      <div className="absolute bottom-2 left-0 clear-both w-full px-2">
        <BtnDefault
          className="mx-1 float-right"
          color="#5ab4ff"
          onEvent={onDeactive}
          name="Paying"
        />

        <BtnDefault
          className="mx-1 float-right"
          color="#00b96b"
          onEvent={onActive}
          name="Order"
        />

        <BtnBorder
          className="mx-1 float-right"
          onEvent={onCancel}
          name="Cancel"
        />
      </div>
    </div>
  );
}

// #ff4d4f
