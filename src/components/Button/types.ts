export enum ButtonTypeEnum {
  primary = "primary",
  secondary = "secondary",
  terciary = "terciary",
}

export type ButtonType = keyof typeof ButtonTypeEnum;
