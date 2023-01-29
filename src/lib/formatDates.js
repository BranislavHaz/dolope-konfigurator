import { parse, format } from "date-fns";

export const formatdDateLocal = (date) => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  return format(parsedDate, "dd.MM.yyyy");
};
