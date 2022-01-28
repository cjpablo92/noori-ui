import React from "react";
import Button from ".";
import { ButtonTypeEnum } from "./types";

export default {
  title: "Noori-ui/Button",
  component: Button,
};

export const Primary = () => (
  <Button id={"primary-id"} type={ButtonTypeEnum.primary}>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button id={"secondary-id"} type={ButtonTypeEnum.secondary}>
    Secondary
  </Button>
);
export const Terciary = () => (
  <Button id={"terciary-id"} type={ButtonTypeEnum.terciary}>
    Terciary
  </Button>
);
