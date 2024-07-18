import { Button, ConfigProvider } from "antd";
import { IBtnDefault } from "../common/constants/interface";

export const BtnDefault = ({
  name,
  className,
  color,
  onEvent,
}: IBtnDefault) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: color,
            colorPrimary: color,
            borderRadius: 2,
          },
        },
      }}
    >
      <Button type="primary" onClick={onEvent} className={className}>
        {name}
      </Button>
    </ConfigProvider>
  );
};

export const BtnBorder = ({ name, className, onEvent }: IBtnDefault) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: "gray",
            colorBorder: "gray",
            borderRadius: 2,
          },
        },
      }}
    >
      <Button type="default" onClick={onEvent} className={className}>
        {name}
      </Button>
    </ConfigProvider>
  );
};
