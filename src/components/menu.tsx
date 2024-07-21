import { useContext, useState } from "react";
import { TitleText } from "./title";
import { DrinkContext, DrinkDispatch } from "../contexts/DrinkContext";

import { useParams } from "react-router-dom";
import { DrinkActionEnum } from "../common/constants/enum";

export default function Menu() {
  const { tableId } = useParams();
  const drinkContext = useContext(DrinkContext);

  // console.log(drinkContext);

  const [typeId, setTypeId] = useState(0);
  const drinkDispatch = useContext(DrinkDispatch);

  const columnsType = drinkContext.find(
    (drink) => drink.tableId === Number(tableId)
  )?.drinksType;

  const columnsDrink = columnsType
    ?.filter((drinkType) => drinkType.drinkTypeId === typeId)
    .find((drink) => drink.drinks)?.drinks;

  const onToggleTypes = (drinkTypeId: number) => {
    setTypeId(drinkTypeId);
  };

  const onToggleDrinks = (drinkId: number, isActive: boolean) => {
    if (tableId) {
      drinkDispatch({
        type: DrinkActionEnum.TOGGLE_DRINK,
        drinkId: drinkId,
        tableId: Number(tableId),
        isActive: !isActive,
      });
    }
  };

  return (
    <>
      <TitleText title="Menu" />
      <div className="flex px-2 gap-5 lg:h-[500px] h-[180px]">
        <div className="w-[35%] h-full">
          <p className="text-sm mb-1">Drinks type</p>
          <div className="w-full h-full border-[1px] border-slate-300 py-2 rounded">
            {columnsType?.map((drinkType) => (
              <p
                className={`px-3 py-1 border-[1px] ${
                  drinkType.isActive
                    ? "bg-sky-300 text-white"
                    : "hover:bg-slate-100"
                } border-white cursor-pointer`}
                key={drinkType.drinkTypeId}
                onClick={() => onToggleTypes(drinkType.drinkTypeId)}
              >
                {drinkType.drinkTypeName}
              </p>
            ))}
          </div>
        </div>
        <div className="w-[35%] h-full">
          <p className="text-sm mb-1">Drinks</p>
          <div className="w-full h-full border-[1px] border-slate-300 py-2 rounded">
            {columnsDrink?.map((drink) => (
              <p
                className={`px-3 py-1 border-[1px] ${
                  drink.isActive
                    ? "bg-sky-300 text-white"
                    : "hover:bg-slate-100"
                } border-white cursor-pointer`}
                key={drink.drinkId}
                onClick={() => onToggleDrinks(drink.drinkId, drink.isActive)}
              >
                {drink.drinkName}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
