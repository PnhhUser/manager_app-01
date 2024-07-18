import moment from "moment";
import { useEffect, useState } from "react";
import { convertToVietnamese } from "../common/utils/function";

const Datetime = () => {
  const [currentTime, setCurrentTime] = useState(
    convertToVietnamese(moment().format("LTS"))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(convertToVietnamese(moment().format("LTS")));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="text-sm">{currentTime}</p>;
};

export { Datetime };
