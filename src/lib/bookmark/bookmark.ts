import { TableFieldType } from "../../components/common/Table/types";

export const saveStorage = (bookmark: string, item: TableFieldType) => {
  const compareArray = localStorage.getItem(bookmark)?.split("*><") || [];
  const temp = compareArray.map((v: string) => v.split(",")[1]);

  if (temp.filter((v) => v && v?.indexOf(item.patient) !== -1).length !== 0) {
    alert("이미 북마크 되어있습니다");
    return;
  }

  localStorage.setItem(
    bookmark,
    `${JSON.stringify(item)}*><${localStorage.getItem(bookmark) || ""}`
  );
  alert("북마크 되었습니다.");
};
