import { ITitle } from "../common/constants/interface";

const TitleText = ({ title }: ITitle) => {
  return <h2 className="font-semibold py-2 ms-2 underline">{title}</h2>;
};

const TitleBill = ({ number }: ITitle) => {
  return (
    <h2 className="font-semibold py-2  underline">Number table {number}</h2>
  );
};

export { TitleText, TitleBill };
