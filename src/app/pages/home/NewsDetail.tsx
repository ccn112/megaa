import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, useLocation, useParams } from "react-router";

import { Page } from "@/components/shared/Page";
import { Card } from "@/components/ui";
import { latestNews } from "./data";

export default function NewsDetailPage() {
  const { newsId } = useParams();
  const { pathname } = useLocation();

  const news = latestNews.find((item) => item.id === newsId);

  if (!news) {
    return <Navigate to="/desktop/home/overview" replace />;
  }

  const isMobile = pathname.startsWith("/mobile");
  const backPath = isMobile ? "/mobile" : "/desktop/home/overview";

  return (
    <Page title={news.title}>
      <div className="transition-content mx-auto mt-4 w-full max-w-3xl px-4 pb-8 lg:mt-6 lg:px-(--margin-x)">
        <Link
          to={backPath}
          className="inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-dark-200 dark:hover:text-primary-400"
        >
          <ArrowLeftIcon className="size-4" />
          Quay lại trang chủ
        </Link>

        <Card className="mt-3 overflow-hidden">
          <img src={news.image} alt={news.title} className="h-56 w-full object-cover" />
          <div className="p-5">
            <p className="text-xs text-gray-500 dark:text-dark-300">
              {news.source} · {news.publishedAt}
            </p>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-dark-50">
              {news.title}
            </h1>
            <p className="mt-3 text-sm-plus text-gray-600 dark:text-dark-200">
              {news.content}
            </p>
          </div>
        </Card>
      </div>
    </Page>
  );
}
