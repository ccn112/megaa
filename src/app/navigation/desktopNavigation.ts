import { NavigationTree } from "@/@types/navigation";
import { desktopMenuMap } from "./desktopMenuMap";

const ROOT_DESKTOP = "/desktop";

const pathOf = (groupKey: string, itemKey: string) =>
  `${ROOT_DESKTOP}/${groupKey}/${itemKey}`;

export const desktopNavigation: NavigationTree[] = desktopMenuMap.map((group) => ({
  id: `desktop.${group.key}`,
  type: "root",
  path: `${ROOT_DESKTOP}/${group.key}`,
  title: group.label,
  icon: group.icon,
  childs: group.items.map((item) => ({
    id: `desktop.${group.key}.${item.key}`,
    type: "item",
    title: item.label,
    path: pathOf(group.key, item.key),
  })),
}));
