import { ElementType, Fragment, useEffect, useMemo, useState } from "react";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  EllipsisHorizontalCircleIcon,
  FolderIcon,
  HomeIcon,
  SparklesIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "react-router";

import { Page } from "@/components/shared/Page";
import { Avatar, Button, Card } from "@/components/ui";
import { useLocalStorage } from "@/hooks";
import { WorkspaceHome } from "@/app/pages/home/WorkspaceHome";
import {
  DEFAULT_APP_KEY,
  DEFAULT_LAYOUT_CACHE,
  MOBILE_ACTIVE_APP_KEY,
  MOBILE_ACTIVE_TAB_KEY,
  MOBILE_LAYOUT_CACHE_KEY,
  MORE_TAB_KEY,
  MobileAppConfig,
  MobileIconKey,
  MobileLayoutCache,
} from "./config";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const iconMap: Record<MobileIconKey, ElementType> = {
  home: HomeIcon,
  office: BuildingOffice2Icon,
  calendar: CalendarDaysIcon,
  users: UsersIcon,
  more: EllipsisHorizontalCircleIcon,
  briefcase: BuildingOffice2Icon,
  chart: ChartBarIcon,
  check: CheckBadgeIcon,
  folder: FolderIcon,
  profile: UserCircleIcon,
  spark: SparklesIcon,
};

const emptyTabs: Record<string, string> = {
  [DEFAULT_APP_KEY]: "home",
};

export default function MobileHubPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [layoutCache, setLayoutCache] = useLocalStorage<MobileLayoutCache>(
    MOBILE_LAYOUT_CACHE_KEY,
    {},
  );
  const [activeAppKey, setActiveAppKey] = useLocalStorage<string>(
    MOBILE_ACTIVE_APP_KEY,
    DEFAULT_APP_KEY,
  );
  const [activeTabsByApp, setActiveTabsByApp] = useLocalStorage<
    Record<string, string>
  >(MOBILE_ACTIVE_TAB_KEY, emptyTabs);

  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (Object.keys(layoutCache).length === 0) {
      setLayoutCache(DEFAULT_LAYOUT_CACHE);
    }
  }, [layoutCache, setLayoutCache]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const apps = useMemo(
    () =>
      Object.keys(layoutCache).length > 0
        ? layoutCache
        : DEFAULT_LAYOUT_CACHE,
    [layoutCache],
  );

  useEffect(() => {
    const nextAppKey = searchParams.get("app") ?? undefined;
    const nextTabKey = searchParams.get("tab");

    if (!nextAppKey && !nextTabKey) {
      return;
    }

    const app = nextAppKey ? apps[nextAppKey] : undefined;

    if (app && nextAppKey) {
      setActiveAppKey(nextAppKey);

      if (nextTabKey && app.tabs.some((tab) => tab.key === nextTabKey)) {
        setActiveTabsByApp((prev) => ({
          ...prev,
          [nextAppKey]: nextTabKey,
        }));
      }
    }

    setSearchParams({}, { replace: true });
  }, [
    apps,
    searchParams,
    setActiveAppKey,
    setActiveTabsByApp,
    setSearchParams,
  ]);

  const appKeys = useMemo(() => Object.keys(apps), [apps]);

  const activeApp =
    apps[activeAppKey] ?? apps[DEFAULT_APP_KEY] ?? apps[appKeys[0] ?? ""];

  const currentTabKey = activeTabsByApp[activeApp.key] ?? activeApp.tabs[0].key;
  const activeTab =
    activeApp.tabs.find((tab) => tab.key === currentTabKey) ?? activeApp.tabs[0];
  const isMoreTab = currentTabKey === MORE_TAB_KEY;
  const isMobileHome = activeApp.key === DEFAULT_APP_KEY && currentTabKey === "home";

  const bottomTabs = [
    ...activeApp.tabs.slice(0, 4),
    {
      key: MORE_TAB_KEY,
      label: "Thêm nữa",
      icon: "more" as MobileIconKey,
      cards: [],
    },
  ];

  const handleChangeTab = (tabKey: string) => {
    setActiveTabsByApp((prev) => ({ ...prev, [activeApp.key]: tabKey }));
  };

  const handleSwitchApp = (nextAppKey: string) => {
    const nextApp = apps[nextAppKey];

    if (!nextApp) {
      return;
    }

    setActiveAppKey(nextAppKey);
    setActiveTabsByApp((prev) => ({
      ...prev,
      [nextAppKey]: prev[nextAppKey] ?? nextApp.tabs[0].key,
    }));
  };

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  if (!activeApp) {
    return null;
  }

  const ActiveAppIcon = iconMap[activeApp.icon];

  return (
    <Page title="Mobile Hub">
      <div className="mx-auto min-h-screen w-full max-w-md bg-gray-100 pb-[calc(env(safe-area-inset-bottom)+5.25rem)] dark:bg-dark-900">
        <div className="sticky top-0 z-10 border-b border-gray-200/70 bg-white/95 px-4 pt-[calc(env(safe-area-inset-top)+0.625rem)] pb-2.5 backdrop-blur-sm dark:border-dark-600 dark:bg-dark-800/90">
          <div className="flex min-h-11 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <Avatar size={12} initialColor={activeApp.color}>
                <ActiveAppIcon className="size-5" />
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm-plus font-semibold text-gray-800 dark:text-dark-50">
                  {activeApp.name}
                </p>
                <p className="truncate text-xs text-gray-500 dark:text-dark-300">
                  {activeApp.description}
                </p>
              </div>
            </div>
            {deferredPrompt ? (
              <Button
                className="px-3 py-1.5 text-xs"
                variant="soft"
                color="primary"
                onClick={handleInstall}
              >
                Cài đặt
              </Button>
            ) : null}
          </div>
        </div>

        <main className="space-y-3 px-4 py-3">
          {isMoreTab ? (
            <Fragment>
              <Card className="p-4">
                <p className="text-sm font-semibold text-gray-800 dark:text-dark-50">
                  Ứng dụng nội bộ
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-dark-300">
                  Chọn app để đổi menu tab bên dưới nhưng vẫn giữ tab cuối là
                  Thêm nữa.
                </p>
              </Card>
              {appKeys.map((appKey) => {
                const app = apps[appKey] as MobileAppConfig;
                const AppIcon = iconMap[app.icon];
                const isActive = app.key === activeApp.key;

                return (
                  <Card
                    key={app.key}
                    className="flex items-center justify-between gap-3 p-3.5"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar size={10} initialColor={app.color}>
                        <AppIcon className="size-4.5" />
                      </Avatar>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-800 dark:text-dark-100">
                          {app.name}
                        </p>
                        <p className="truncate text-xs text-gray-500 dark:text-dark-300">
                          {app.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="px-3 py-1.5 text-xs"
                      color={isActive ? "neutral" : "primary"}
                      variant={isActive ? "soft" : "filled"}
                      onClick={() => handleSwitchApp(app.key)}
                    >
                      {isActive ? "Đang dùng" : "Mở app"}
                    </Button>
                  </Card>
                );
              })}
            </Fragment>
          ) : isMobileHome ? (
            <WorkspaceHome mode="mobile" />
          ) : (
            activeTab?.cards.map((item) => (
              <Card
                key={item.id}
                className="p-4 transition-transform duration-200 active:scale-[0.995]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm-plus font-semibold text-gray-800 dark:text-dark-100">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-dark-300">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-500/10 px-2.5 py-1 text-tiny-plus font-semibold text-primary-700 dark:text-primary-300">
                    {item.metric}
                  </span>
                </div>
              </Card>
            ))
          )}
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto flex h-[calc(3.75rem+env(safe-area-inset-bottom))] w-full max-w-md items-stretch gap-0.5 border-t border-gray-200 bg-white/95 px-1.5 pb-[calc(env(safe-area-inset-bottom)+0.375rem)] pt-1.5 backdrop-blur-sm dark:border-dark-600 dark:bg-dark-800/95">
          {bottomTabs.map((tab) => {
            const isActive = currentTabKey === tab.key;
            const TabIcon = iconMap[tab.icon];

            return (
              <button
                type="button"
                key={tab.key}
                onClick={() => handleChangeTab(tab.key)}
                className="flex min-h-11 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-center transition-colors"
              >
                <span
                  className={[
                    "inline-flex size-7 items-center justify-center rounded-lg transition-colors",
                    isActive
                      ? "bg-primary-500/15 text-primary-700 dark:text-primary-300"
                      : "text-gray-400 dark:text-dark-300",
                  ].join(" ")}
                >
                  <TabIcon className="size-4.5" />
                </span>
                <span
                  className={[
                    "text-tiny-plus font-medium leading-none",
                    isActive
                      ? "text-primary-700 dark:text-primary-300"
                      : "text-gray-500 dark:text-dark-300",
                  ].join(" ")}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </Page>
  );
}
