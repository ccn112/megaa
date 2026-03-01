import { Navigate, useParams } from "react-router";

import { Page } from "@/components/shared/Page";
import { Card } from "@/components/ui";
import { desktopMenuMap } from "@/app/navigation/desktopMenuMap";
import { WorkspaceHome } from "@/app/pages/home/WorkspaceHome";

const DEFAULT_DESKTOP_PATH = "/desktop/home/overview";

export default function DesktopWorkspacePage() {
  const { group: groupKey, page: pageKey } = useParams();

  const group = desktopMenuMap.find((item) => item.key === groupKey);
  const menu = group?.items.find((item) => item.key === pageKey);

  if (!group || !menu) {
    return <Navigate to={DEFAULT_DESKTOP_PATH} replace />;
  }

  const webPath = `/desktop/${group.key}/${menu.key}`;
  const isDesktopHome = group.key === "home" && menu.key === "overview";

  return (
    <Page title={`${group.label} - ${menu.label}`}>
      <div className="transition-content mt-5 px-(--margin-x) pb-8 lg:mt-6">
        {isDesktopHome ? (
          <WorkspaceHome mode="desktop" />
        ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <Card className="p-5 lg:col-span-2">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-dark-300">
              Desktop / {group.label}
            </p>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-dark-50">
              {menu.label}
            </h1>
            <p className="mt-2 text-sm-plus text-gray-600 dark:text-dark-200">
              {menu.description}
            </p>
            <div className="mt-5 rounded-lg border border-dashed border-gray-300 p-3 dark:border-dark-500">
              <p className="text-xs text-gray-500 dark:text-dark-300">
                Khu vực nội dung nghiệp vụ desktop sẽ được build tại đây theo yêu
                cầu từng trang.
              </p>
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-sm font-semibold text-gray-800 dark:text-dark-50">
              Mapping Web ↔ Mobile
            </p>
            <div className="mt-3 space-y-2 text-xs-plus text-gray-600 dark:text-dark-200">
              <p>
                <span className="font-medium">Web path:</span> {webPath}
              </p>
              <p>
                <span className="font-medium">Mobile app:</span> {menu.mobileAppKey}
              </p>
              <p>
                <span className="font-medium">Mobile tab:</span> {menu.mobileTabKey}
              </p>
            </div>
          </Card>
        </div>
        )}
      </div>
    </Page>
  );
}
