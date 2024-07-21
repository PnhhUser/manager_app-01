import { TitleBill } from "./title";
import { BtnDefault, BtnBorder } from "./btnDefault";
import { TableBills } from "./table";
import { th } from "../fakeData";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DrinkContext } from "../contexts/DrinkContext";

export default function Bill() {
  const { tableId } = useParams();
  const drinksContext = useContext(DrinkContext);
  const [db, setDb] = useState<object[]>([]);

  const onPaying = () => {};

  const onOrder = () => {
    const selected = drinksContext
      .find((item) => item.tableId === Number(tableId))!
      .drinksType.flatMap((drinkType) =>
        drinkType.drinks.filter((drink) => drink.isActive)
      );

    const tableBill = selected.map((item) => ({
      key: item.drinkId,
      drink: item.drinkName,
      prices: item.prices,
      quantity: item.quantity,
    }));

    setDb(tableBill);
  };

  const onCancel = () => {};

  return (
    <div className="px-2 relative w-full h-full">
      {/* title */}
      <TitleBill number={tableId} />

      {/* content */}
      <div className="">
        <TableBills th={th} db={db} />
      </div>

      {/* button */}

      <div className="absolute bottom-2 left-0 clear-both w-full px-2">
        <BtnDefault
          className="mx-1 float-right"
          color="#5ab4ff"
          onEvent={onPaying}
          name="Paying"
        />

        <BtnDefault
          className="mx-1 float-right"
          color="#00b96b"
          onEvent={onOrder}
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
