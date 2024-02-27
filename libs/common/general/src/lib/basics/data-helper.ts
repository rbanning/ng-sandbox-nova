import dayjs from "dayjs"
import { Nullable } from "../types";
import { primitive } from "./primitive";

const isDayJs = (obj: Nullable<dayjs.Dayjs>): boolean => {
  return typeof(obj?.isValid) === 'function' && obj.isValid();
};

const toDayJs = (value: dayjs.ConfigType, defaultValue: Nullable<dayjs.Dayjs> = null) => {
  const ret: Nullable<dayjs.Dayjs> = primitive.isNotNullish(value) ? dayjs(value) : null;
  return isDayJs(ret) ? ret : defaultValue;
};

const now = (): dayjs.Dayjs => {
  return dayjs();
};

export const dateHelper = {
  isDayJs,
  toDayJs,
  now,
} as const;