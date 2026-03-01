import { useEffect, useMemo, useState } from "react";
import {
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  CloudIcon,
  ChevronRightIcon,
  MegaphoneIcon,
  MoonIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

import { useAuthContext } from "@/app/contexts/auth/context";
import { Card } from "@/components/ui";
import { navigationIcons } from "@/app/navigation/icons";
import { latestNews, priorityMessages, quickAccessApps } from "./data";

type HomeMode = "desktop" | "mobile";

function getDayGreeting(hour: number) {
  if (hour < 11) {
    return "Chúc bạn buổi sáng hiệu quả";
  }

  if (hour < 18) {
    return "Chúc bạn buổi chiều nhiều năng lượng";
  }

  return "Chúc bạn buổi tối nhẹ nhàng";
}

function getWeatherMeta(hour: number) {
  if (hour < 11) {
    return { icon: SunIcon, temperature: "28°C", weather: "Nắng nhẹ" };
  }

  if (hour < 18) {
    return { icon: CloudIcon, temperature: "31°C", weather: "Ít mây" };
  }

  return { icon: MoonIcon, temperature: "26°C", weather: "Trời quang" };
}

export function WorkspaceHome({ mode }: { mode: HomeMode }) {
  const { user } = useAuthContext();
  const [now, setNow] = useState(() => new Date());
  const [activeMessageId, setActiveMessageId] = useState(priorityMessages[0].id);

  useEffect(() => {
    const timerId = window.setInterval(() => setNow(new Date()), 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  const hour = now.getHours();
  const greeting = getDayGreeting(hour);
  const weatherMeta = getWeatherMeta(hour);

  const currentTime = useMemo(
    () =>
      new Intl.DateTimeFormat("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now),
    [now],
  );

  const currentDate = useMemo(
    () =>
      new Intl.DateTimeFormat("vi-VN", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(now),
    [now],
  );

  const userName = user?.name ?? "bạn";
  const activeMessage =
    priorityMessages.find((item) => item.id === activeMessageId) ??
    priorityMessages[0];
  const WeatherIcon = weatherMeta.icon;

  const isMobile = mode === "mobile";
  const newsDetailBasePath = isMobile ? "/mobile/news" : "/desktop/home/news";

  const mobileSectionClass =
    "bg-white px-4 py-4 shadow-soft dark:border-dark-600 dark:bg-dark-700 dark:shadow-none";

  return (
    <div className={isMobile ? "-mx-4 space-y-2" : "space-y-5"}>
      {isMobile ? (
        <div className={mobileSectionClass}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-gray-800 dark:text-dark-50">
                Xin chào, {userName}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-dark-300">
                {greeting}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1.5 text-xs-plus text-primary-700 dark:text-primary-300">
              <WeatherIcon className="size-4" />
              <span>
                {weatherMeta.temperature} · {weatherMeta.weather}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4 text-xs-plus text-gray-500 dark:text-dark-300">
            <span className="inline-flex items-center gap-1">
              <CalendarDaysIcon className="size-4" />
              {currentDate}
            </span>
            <span className="font-semibold text-gray-700 dark:text-dark-100">
              {currentTime}
            </span>
          </div>
        </div>
      ) : (
        <Card className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-gray-800 dark:text-dark-50">
                Xin chào, {userName}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-dark-300">
                {greeting}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1.5 text-xs-plus text-primary-700 dark:text-primary-300">
              <WeatherIcon className="size-4" />
              <span>
                {weatherMeta.temperature} · {weatherMeta.weather}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4 text-xs-plus text-gray-500 dark:text-dark-300">
            <span className="inline-flex items-center gap-1">
              <CalendarDaysIcon className="size-4" />
              {currentDate}
            </span>
            <span className="font-semibold text-gray-700 dark:text-dark-100">
              {currentTime}
            </span>
          </div>
        </Card>
      )}

      {isMobile ? (
        <div className={mobileSectionClass}>
          <div className="mb-3 flex items-center gap-2">
            <MegaphoneIcon className="size-4.5 text-primary-600 dark:text-primary-400" />
            <p className="text-sm-plus font-semibold uppercase tracking-wide text-gray-700 dark:text-dark-100">
              Thông điệp cần lưu tâm
            </p>
          </div>

          <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
            {priorityMessages.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveMessageId(item.id)}
                className="relative w-[88%] shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 text-left outline-hidden transition sm:w-[48%] dark:border-dark-600"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover"
                />
                <div className="bg-black/50 px-3 py-2 text-white">
                  <p className="line-clamp-1 text-sm font-medium">{item.title}</p>
                  <p className="line-clamp-1 text-xs text-white/85">{item.summary}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-primary-500/20 bg-primary-500/5 p-3">
            <p className="text-sm-plus font-semibold text-gray-800 dark:text-dark-50">
              {activeMessage.title}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-dark-200">
              {activeMessage.detail}
            </p>
          </div>
        </div>
      ) : (
        <Card className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <MegaphoneIcon className="size-4.5 text-primary-600 dark:text-primary-400" />
            <p className="text-sm-plus font-semibold text-gray-800 dark:text-dark-50">
              Thông điệp cần lưu tâm
            </p>
          </div>

          <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
            {priorityMessages.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveMessageId(item.id)}
                className="relative w-[88%] shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 text-left outline-hidden transition sm:w-[48%] dark:border-dark-600"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover"
                />
                <div className="bg-black/50 px-3 py-2 text-white">
                  <p className="line-clamp-1 text-sm font-medium">{item.title}</p>
                  <p className="line-clamp-1 text-xs text-white/85">{item.summary}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-primary-500/20 bg-primary-500/5 p-3">
            <p className="text-sm-plus font-semibold text-gray-800 dark:text-dark-50">
              {activeMessage.title}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-dark-200">
              {activeMessage.detail}
            </p>
          </div>
        </Card>
      )}

      {isMobile ? (
        <div className={mobileSectionClass}>
          <div className="mb-3 flex items-center gap-2">
            <UserGroupIcon className="size-4.5 text-primary-600 dark:text-primary-400" />
            <p className="text-sm-plus font-semibold uppercase tracking-wide text-gray-700 dark:text-dark-100">
              Ứng dụng truy cập nhanh
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {quickAccessApps.map((app) => (
              <Link
                key={app.id}
                to={isMobile ? app.mobilePath : app.desktopPath}
                className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-left outline-hidden transition hover:border-primary-300 hover:bg-primary-500/5 dark:border-dark-600 dark:bg-dark-700"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-6 items-center justify-center text-primary-600 dark:text-primary-400">
                    {(() => {
                      const Icon = navigationIcons[app.icon];
                      return Icon ? <Icon className="size-5" /> : null;
                    })()}
                  </span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-dark-50">
                    {app.name}
                  </p>
                </div>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-dark-300">
                  {app.hint}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Card className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <UserGroupIcon className="size-4.5 text-primary-600 dark:text-primary-400" />
            <p className="text-sm-plus font-semibold text-gray-800 dark:text-dark-50">
              Ứng dụng truy cập nhanh
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {quickAccessApps.map((app) => (
              <Link
                key={app.id}
                to={isMobile ? app.mobilePath : app.desktopPath}
                className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-left outline-hidden transition hover:border-primary-300 hover:bg-primary-500/5 dark:border-dark-600 dark:bg-dark-700"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-6 items-center justify-center text-primary-600 dark:text-primary-400">
                    {(() => {
                      const Icon = navigationIcons[app.icon];
                      return Icon ? <Icon className="size-5" /> : null;
                    })()}
                  </span>
                  <p className="text-sm font-semibold text-gray-800 dark:text-dark-50">
                    {app.name}
                  </p>
                </div>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-dark-300">
                  {app.hint}
                </p>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isMobile ? (
        <div className={mobileSectionClass}>
          <div className="mb-2.5 flex items-center gap-2">
            <ArrowTrendingUpIcon className="size-4.5 text-primary-600 dark:text-primary-400" />
            <p className="text-sm-plus font-semibold uppercase tracking-wide text-gray-700 dark:text-dark-100">
              Tin tức mới
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-dark-600">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                to={`${newsDetailBasePath}/${news.id}`}
                className="flex w-full items-start justify-between gap-2 py-2.5 text-left outline-hidden"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex size-4 items-center justify-center text-primary-600 dark:text-primary-400">
                      {(() => {
                        const Icon = navigationIcons[news.icon];
                        return Icon ? <Icon className="size-4" /> : null;
                      })()}
                    </span>
                    <p className="line-clamp-1 text-sm font-medium text-gray-800 dark:text-dark-100">
                      {news.title}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-dark-300">
                    {news.source} · {news.publishedAt}
                  </p>
                </div>
                <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Card className="p-5">
          <div className="mb-2.5 flex items-center gap-2">
            <ArrowTrendingUpIcon className="size-4.5 text-primary-600 dark:text-primary-400" />
            <p className="text-sm-plus font-semibold text-gray-800 dark:text-dark-50">
              Tin tức mới
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-dark-600">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                to={`${newsDetailBasePath}/${news.id}`}
                className="flex w-full items-start justify-between gap-2 py-2.5 text-left outline-hidden"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex size-4 items-center justify-center text-primary-600 dark:text-primary-400">
                      {(() => {
                        const Icon = navigationIcons[news.icon];
                        return Icon ? <Icon className="size-4" /> : null;
                      })()}
                    </span>
                    <p className="line-clamp-1 text-sm font-medium text-gray-800 dark:text-dark-100">
                      {news.title}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-dark-300">
                    {news.source} · {news.publishedAt}
                  </p>
                </div>
                <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-gray-400" />
              </Link>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
