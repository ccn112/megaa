import { ColorType } from "@/constants/app";

export type MobileIconKey =
  | "home"
  | "office"
  | "calendar"
  | "users"
  | "more"
  | "briefcase"
  | "chart"
  | "check"
  | "folder"
  | "profile"
  | "spark";

export type MobileCardItem = {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
};

export type MobileTabConfig = {
  key: string;
  label: string;
  icon: MobileIconKey;
  cards: MobileCardItem[];
};

export type MobileAppConfig = {
  key: string;
  name: string;
  shortName: string;
  color: ColorType;
  icon: MobileIconKey;
  description: string;
  tabs: MobileTabConfig[];
};

export type MobileLayoutCache = Record<string, MobileAppConfig>;

export const MOBILE_LAYOUT_CACHE_KEY = "megaapp-mobile-layout-cache-v1";
export const MOBILE_ACTIVE_APP_KEY = "megaapp-mobile-active-app-v1";
export const MOBILE_ACTIVE_TAB_KEY = "megaapp-mobile-active-tab-v1";

export const DEFAULT_APP_KEY = "corp";
export const MORE_TAB_KEY = "more";

export const DEFAULT_LAYOUT_CACHE: MobileLayoutCache = {
  corp: {
    key: "corp",
    name: "Mega Group",
    shortName: "Tập đoàn",
    color: "primary",
    icon: "spark",
    description: "Không gian làm việc chung của tập đoàn",
    tabs: [
      {
        key: "home",
        label: "Home",
        icon: "home",
        cards: [
          {
            id: "corp-home-1",
            title: "Bản tin nội bộ",
            subtitle: "12 thông báo mới trong hôm nay",
            metric: "12 mới",
          },
          {
            id: "corp-home-2",
            title: "Lịch họp tập đoàn",
            subtitle: "3 cuộc họp ưu tiên trong ngày",
            metric: "3 lịch",
          },
        ],
      },
      {
        key: "vps",
        label: "VP Số",
        icon: "office",
        cards: [
          {
            id: "corp-vps-1",
            title: "Văn thư điện tử",
            subtitle: "8 văn bản chờ xác nhận",
            metric: "8 chờ",
          },
          {
            id: "corp-vps-2",
            title: "Phòng họp thông minh",
            subtitle: "2 booking sắp diễn ra",
            metric: "2 booking",
          },
        ],
      },
      {
        key: "myday",
        label: "MyDay",
        icon: "calendar",
        cards: [
          {
            id: "corp-myday-1",
            title: "Việc cần xử lý",
            subtitle: "5 task có hạn hoàn thành hôm nay",
            metric: "5 task",
          },
          {
            id: "corp-myday-2",
            title: "Nhắc việc cá nhân",
            subtitle: "4 nhắc lịch đã đồng bộ",
            metric: "4 nhắc",
          },
        ],
      },
      {
        key: "community",
        label: "Cộng đồng",
        icon: "users",
        cards: [
          {
            id: "corp-community-1",
            title: "Diễn đàn nhân viên",
            subtitle: "26 thảo luận hoạt động",
            metric: "26 chủ đề",
          },
          {
            id: "corp-community-2",
            title: "CLB nội bộ",
            subtitle: "7 sự kiện đang mở đăng ký",
            metric: "7 sự kiện",
          },
        ],
      },
    ],
  },
  hrm: {
    key: "hrm",
    name: "HRM",
    shortName: "HRM",
    color: "success",
    icon: "briefcase",
    description: "Nhân sự, chấm công, phúc lợi",
    tabs: [
      {
        key: "dashboard",
        label: "Tổng quan",
        icon: "home",
        cards: [
          {
            id: "hrm-dashboard-1",
            title: "Biến động nhân sự",
            subtitle: "Tăng 14 nhân sự trong tháng",
            metric: "+14",
          },
          {
            id: "hrm-dashboard-2",
            title: "Tỉ lệ đi làm đúng giờ",
            subtitle: "Cập nhật theo thời gian thực",
            metric: "96%",
          },
        ],
      },
      {
        key: "attendance",
        label: "Chấm công",
        icon: "check",
        cards: [
          {
            id: "hrm-attendance-1",
            title: "Ca làm hôm nay",
            subtitle: "218 nhân sự đã check-in",
            metric: "218",
          },
          {
            id: "hrm-attendance-2",
            title: "Yêu cầu điều chỉnh",
            subtitle: "11 phiếu chờ xác nhận",
            metric: "11 phiếu",
          },
        ],
      },
      {
        key: "leave",
        label: "Nghỉ phép",
        icon: "calendar",
        cards: [
          {
            id: "hrm-leave-1",
            title: "Đơn nghỉ phép",
            subtitle: "9 đơn cần phê duyệt",
            metric: "9 đơn",
          },
          {
            id: "hrm-leave-2",
            title: "Quỹ phép còn lại",
            subtitle: "Trung bình 6.2 ngày/người",
            metric: "6.2 ngày",
          },
        ],
      },
      {
        key: "benefits",
        label: "Phúc lợi",
        icon: "users",
        cards: [
          {
            id: "hrm-benefit-1",
            title: "Bảo hiểm",
            subtitle: "100% nhân sự đã đồng bộ hồ sơ",
            metric: "100%",
          },
          {
            id: "hrm-benefit-2",
            title: "Chương trình nội bộ",
            subtitle: "3 gói phúc lợi mới",
            metric: "3 gói",
          },
        ],
      },
    ],
  },
  crm: {
    key: "crm",
    name: "CRM",
    shortName: "CRM",
    color: "info",
    icon: "users",
    description: "Khách hàng, pipeline và chăm sóc",
    tabs: [
      {
        key: "overview",
        label: "Tổng quan",
        icon: "home",
        cards: [
          {
            id: "crm-overview-1",
            title: "Lead mới",
            subtitle: "34 lead tạo mới hôm nay",
            metric: "34 lead",
          },
          {
            id: "crm-overview-2",
            title: "Tỉ lệ chuyển đổi",
            subtitle: "So với tuần trước tăng nhẹ",
            metric: "21%",
          },
        ],
      },
      {
        key: "pipeline",
        label: "Pipeline",
        icon: "chart",
        cards: [
          {
            id: "crm-pipe-1",
            title: "Deal đang theo dõi",
            subtitle: "52 deal ở các giai đoạn",
            metric: "52 deal",
          },
          {
            id: "crm-pipe-2",
            title: "Giá trị pipeline",
            subtitle: "Tổng giá trị cơ hội hiện tại",
            metric: "42.3 tỷ",
          },
        ],
      },
      {
        key: "customers",
        label: "Khách hàng",
        icon: "users",
        cards: [
          {
            id: "crm-cus-1",
            title: "Khách hàng cần chăm sóc",
            subtitle: "18 tài khoản có SLA trong 24h",
            metric: "18 tài khoản",
          },
          {
            id: "crm-cus-2",
            title: "NPS tuần này",
            subtitle: "Điểm hài lòng theo khảo sát",
            metric: "8.9",
          },
        ],
      },
      {
        key: "calendar",
        label: "Lịch gặp",
        icon: "calendar",
        cards: [
          {
            id: "crm-cal-1",
            title: "Lịch hẹn hôm nay",
            subtitle: "7 lịch gặp với khách hàng",
            metric: "7 lịch",
          },
          {
            id: "crm-cal-2",
            title: "Follow-up quá hạn",
            subtitle: "4 đầu việc cần xử lý ngay",
            metric: "4 việc",
          },
        ],
      },
    ],
  },
  eapproval: {
    key: "eapproval",
    name: "Eapproval",
    shortName: "Phê duyệt",
    color: "warning",
    icon: "check",
    description: "Quy trình duyệt nhanh trên mobile",
    tabs: [
      {
        key: "queue",
        label: "Chờ duyệt",
        icon: "home",
        cards: [
          {
            id: "approval-queue-1",
            title: "Phiếu chờ xử lý",
            subtitle: "27 phiếu theo SLA ưu tiên",
            metric: "27 phiếu",
          },
          {
            id: "approval-queue-2",
            title: "Quá hạn",
            subtitle: "2 phiếu vượt thời gian cam kết",
            metric: "2 quá hạn",
          },
        ],
      },
      {
        key: "rules",
        label: "Luồng duyệt",
        icon: "office",
        cards: [
          {
            id: "approval-rules-1",
            title: "Quy trình đang chạy",
            subtitle: "11 quy trình được kích hoạt",
            metric: "11 luồng",
          },
          {
            id: "approval-rules-2",
            title: "Nhánh điều kiện",
            subtitle: "6 rule vừa cập nhật",
            metric: "6 rule",
          },
        ],
      },
      {
        key: "history",
        label: "Lịch sử",
        icon: "calendar",
        cards: [
          {
            id: "approval-history-1",
            title: "Phê duyệt hoàn tất",
            subtitle: "84 hồ sơ trong 7 ngày",
            metric: "84 hồ sơ",
          },
          {
            id: "approval-history-2",
            title: "Tỉ lệ đúng hạn",
            subtitle: "Hiệu suất toàn hệ thống",
            metric: "97%",
          },
        ],
      },
      {
        key: "delegation",
        label: "Ủy quyền",
        icon: "profile",
        cards: [
          {
            id: "approval-dele-1",
            title: "Lịch ủy quyền",
            subtitle: "3 lịch đang hiệu lực",
            metric: "3 lịch",
          },
          {
            id: "approval-dele-2",
            title: "Người thay thế",
            subtitle: "5 cấu hình theo phòng ban",
            metric: "5 cấu hình",
          },
        ],
      },
    ],
  },
  report: {
    key: "report",
    name: "Báo cáo",
    shortName: "Báo cáo",
    color: "secondary",
    icon: "chart",
    description: "BI và dashboard điều hành",
    tabs: [
      {
        key: "summary",
        label: "Tổng quan",
        icon: "home",
        cards: [
          {
            id: "report-summary-1",
            title: "KPI tập đoàn",
            subtitle: "9/12 chỉ tiêu đạt mục tiêu",
            metric: "75%",
          },
          {
            id: "report-summary-2",
            title: "Doanh thu MTD",
            subtitle: "Lũy kế đến thời điểm hiện tại",
            metric: "128 tỷ",
          },
        ],
      },
      {
        key: "finance",
        label: "Tài chính",
        icon: "chart",
        cards: [
          {
            id: "report-fin-1",
            title: "Biên lợi nhuận",
            subtitle: "Theo từng công ty thành viên",
            metric: "18.4%",
          },
          {
            id: "report-fin-2",
            title: "Dòng tiền",
            subtitle: "Cập nhật từ ERP mỗi 15 phút",
            metric: "+23 tỷ",
          },
        ],
      },
      {
        key: "operation",
        label: "Vận hành",
        icon: "office",
        cards: [
          {
            id: "report-op-1",
            title: "Hiệu suất đơn vị",
            subtitle: "27 đơn vị đã đồng bộ dữ liệu",
            metric: "27 đơn vị",
          },
          {
            id: "report-op-2",
            title: "Cảnh báo vận hành",
            subtitle: "5 tín hiệu cần theo dõi",
            metric: "5 cảnh báo",
          },
        ],
      },
      {
        key: "forecast",
        label: "Dự báo",
        icon: "calendar",
        cards: [
          {
            id: "report-forecast-1",
            title: "Doanh thu quý",
            subtitle: "Mô hình dự báo 90 ngày",
            metric: "136 tỷ",
          },
          {
            id: "report-forecast-2",
            title: "Nhân lực dự kiến",
            subtitle: "Kịch bản tăng trưởng trung bình",
            metric: "+24 FTE",
          },
        ],
      },
    ],
  },
  project: {
    key: "project",
    name: "Dự án",
    shortName: "Dự án",
    color: "primary",
    icon: "folder",
    description: "Theo dõi tiến độ và nguồn lực",
    tabs: [
      {
        key: "board",
        label: "Board",
        icon: "home",
        cards: [
          {
            id: "project-board-1",
            title: "Sprint hiện tại",
            subtitle: "62 task đang triển khai",
            metric: "62 task",
          },
          {
            id: "project-board-2",
            title: "Blocker",
            subtitle: "4 việc bị chặn cần xử lý",
            metric: "4 blocker",
          },
        ],
      },
      {
        key: "timeline",
        label: "Tiến độ",
        icon: "calendar",
        cards: [
          {
            id: "project-time-1",
            title: "Mốc sắp tới",
            subtitle: "6 milestone trong 14 ngày",
            metric: "6 mốc",
          },
          {
            id: "project-time-2",
            title: "Burn down",
            subtitle: "Tiến độ hoàn thành sprint",
            metric: "81%",
          },
        ],
      },
      {
        key: "resource",
        label: "Nguồn lực",
        icon: "users",
        cards: [
          {
            id: "project-resource-1",
            title: "Phân bổ đội nhóm",
            subtitle: "12 team active trên hệ thống",
            metric: "12 team",
          },
          {
            id: "project-resource-2",
            title: "Capacity tuần",
            subtitle: "Tổng năng lực còn lại",
            metric: "312h",
          },
        ],
      },
      {
        key: "risk",
        label: "Rủi ro",
        icon: "check",
        cards: [
          {
            id: "project-risk-1",
            title: "Rủi ro mở",
            subtitle: "9 risk cần người phụ trách",
            metric: "9 risk",
          },
          {
            id: "project-risk-2",
            title: "Risk đã xử lý",
            subtitle: "17 risk đã đóng trong tháng",
            metric: "17 đóng",
          },
        ],
      },
    ],
  },
  profile: {
    key: "profile",
    name: "Thông tin cá nhân",
    shortName: "Cá nhân",
    color: "neutral",
    icon: "profile",
    description: "Tài khoản, hồ sơ và cài đặt",
    tabs: [
      {
        key: "overview",
        label: "Tài khoản",
        icon: "home",
        cards: [
          {
            id: "profile-overview-1",
            title: "Hồ sơ nhân sự",
            subtitle: "Thông tin đã xác thực",
            metric: "Đủ dữ liệu",
          },
          {
            id: "profile-overview-2",
            title: "Bảo mật",
            subtitle: "2FA đã bật",
            metric: "An toàn",
          },
        ],
      },
      {
        key: "documents",
        label: "Hồ sơ",
        icon: "folder",
        cards: [
          {
            id: "profile-doc-1",
            title: "Tài liệu cá nhân",
            subtitle: "18 tệp được lưu trữ",
            metric: "18 tệp",
          },
          {
            id: "profile-doc-2",
            title: "Hợp đồng",
            subtitle: "2 hợp đồng đang hiệu lực",
            metric: "2 hợp đồng",
          },
        ],
      },
      {
        key: "settings",
        label: "Cài đặt",
        icon: "office",
        cards: [
          {
            id: "profile-setting-1",
            title: "Ngôn ngữ",
            subtitle: "Đang dùng tiếng Việt",
            metric: "VI",
          },
          {
            id: "profile-setting-2",
            title: "Thiết bị tin cậy",
            subtitle: "3 thiết bị đã xác minh",
            metric: "3 thiết bị",
          },
        ],
      },
      {
        key: "support",
        label: "Hỗ trợ",
        icon: "users",
        cards: [
          {
            id: "profile-support-1",
            title: "Yêu cầu hỗ trợ",
            subtitle: "1 ticket đang mở",
            metric: "1 ticket",
          },
          {
            id: "profile-support-2",
            title: "Trợ giúp nhanh",
            subtitle: "FAQ theo phòng ban",
            metric: "24 chủ đề",
          },
        ],
      },
    ],
  },
};
