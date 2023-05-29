const fillZero = (number: number) => number.toString().padStart(2, "0");

/**
 *
 * @returns YYYY-MM-DD HH24:MI:SS
 */
export const TimeConvertor = (time: Date) => {
  const timeObject = {
    year: time.getFullYear(),
    month: time.getMonth(),
    day: time.getDay(),
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
  return `${timeObject.year}-${fillZero(timeObject.month)}-${fillZero(
    timeObject.day
  )} ${fillZero(timeObject.hour)}:${fillZero(timeObject.minute)}:${fillZero(
    timeObject.second
  )}`;
};
