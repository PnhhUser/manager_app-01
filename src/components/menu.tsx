import { useContext } from "react";
import { TitleText } from "./title";
import { DrinkContext, DrinkDispatch } from "../contexts/DrinkContext";
import { DrinkActionEnum } from "../common/constants/enum";
import { useSearchParams } from "react-router-dom";
import { REDIRECT_TO_BILL } from "../common/constants/init";

export default function Menu() {
  const drinkContext = useContext(DrinkContext);
  const drinkDispatch = useContext(DrinkDispatch);
  const [searchParams, setSearchParams] = useSearchParams();
  const tableId = Number(searchParams.get(REDIRECT_TO_BILL));
  const drinkTypeId = Number(searchParams.get("drinkTypeId"));

  const drinks = drinkContext.find((drink) => drink.tableId === tableId)!;

  const onSelectOrder = (drinkTypeId: number) => {
    const drinkType = drinks.drinksType.find(
      (drinkType) => drinkType.drinkTypeId === drinkTypeId
    )!;

    if (!drinkType.isActive) {
      drinkDispatch({
        type: DrinkActionEnum.ACTIVE,
        isActive: true,
        drinkTypeId: drinkTypeId,
        tableId: tableId,
      });

      setSearchParams({
        tableId: tableId.toString(),
        drinkTypeId: drinkType.drinkTypeId.toString(),
      });
    } else {
      drinkDispatch({
        type: DrinkActionEnum.DEACTIVE,
        isActive: false,
        drinkTypeId: drinkTypeId,
        tableId: tableId,
      });

      setSearchParams({ tableId: tableId.toString() });
    }
  };

  const columnDrinksType = drinks?.drinksType.map((drinkType) => (
    <p
      key={drinkType.drinkTypeId}
      className={`text-sm p-2 cursor-pointer capitalize ${
        drinkType.isActive ? "bg-sky-300 text-white" : "hover:bg-gray-100"
      }`}
      onClick={() => onSelectOrder(drinkType.drinkTypeId)}
    >
      {drinkType.drinkTypeName}
    </p>
  ));

  const columnDrinks = drinks?.drinksType.map((drinkType) => {
    if (drinkType.isActive && drinkType.drinkTypeId === drinkTypeId) {
      return drinkType.drinks.map((drink) => {
        return (
          <p
            key={drink.drinkId}
            className={`text-sm p-2 cursor-pointer capitalize ${
              drink.isActive ? "bg-sky-300 text-white" : "hover:bg-gray-100"
            }`}
          >
            {drink.drinkName}
          </p>
        );
      });
    }
  });

  return (
    <>
      <TitleText title="Menu" />
      <div className="flex px-2 gap-5 lg:h-[500px] h-[180px]">
        <div className="w-[35%] h-full">
          <p className="text-sm mb-1">Drinks type</p>
          <div className="w-full h-full border-[1px] border-slate-300 py-2 rounded">
            {columnDrinksType}
          </div>
        </div>
        <div className="w-[35%] h-full">
          <p className="text-sm mb-1">Drinks</p>
          <div className="w-full h-full border-[1px] border-slate-300 py-2 rounded">
            {columnDrinks}
          </div>
        </div>
      </div>
    </>
  );
}
