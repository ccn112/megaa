export type MessageItem = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export type QuickAccessItem = {
  id: string;
  name: string;
  hint: string;
  icon: string;
  desktopPath: string;
  mobilePath: string;
};

export type NewsItem = {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  summary: string;
  content: string;
  image: string;
  icon: string;
};

export const priorityMessages: MessageItem[] = [
  {
    id: "welcome",
    title: "Ưu tiên chuyển đổi số quý 1",
    summary: "Đồng bộ quy trình phê duyệt và báo cáo theo mô hình tập trung.",
    detail:
      "Tập đoàn yêu cầu các đơn vị hoàn tất chuẩn hóa biểu mẫu và luồng phê duyệt trong 2 tuần tới để đảm bảo dữ liệu điều hành nhất quán.",
    image: "/images/preview/00_welcome.png",
  },
  {
    id: "kpi",
    title: "Cập nhật KPI điều hành tuần",
    summary: "Các chỉ số chính đã được đồng bộ lên dashboard trung tâm.",
    detail:
      "Khối vận hành cần theo dõi 3 chỉ số ưu tiên gồm tiến độ dự án, năng suất đội nhóm và SLA xử lý công việc để đảm bảo mục tiêu tháng.",
    image: "/images/preview/01_dashboards.png",
  },
  {
    id: "apps",
    title: "Triển khai truy cập app nội bộ hợp nhất",
    summary: "Người dùng có thể chuyển nhanh giữa HRM, CRM, Eapproval và Dự án.",
    detail:
      "Phiên bản hub mới giúp chuyển app liền mạch trên desktop/mobile, giảm thao tác chuyển ngữ cảnh trong ngày làm việc.",
    image: "/images/preview/03_apps.png",
  },
];

export const quickAccessApps: QuickAccessItem[] = [
  {
    id: "qa-1",
    name: "HRM",
    hint: "Chấm công, nghỉ phép",
    icon: "dashboards.employees",
    desktopPath: "/dashboards/employees",
    mobilePath: "/mobile?app=hrm&tab=attendance",
  },
  {
    id: "qa-2",
    name: "CRM",
    hint: "Lead, pipeline",
    icon: "dashboards.crm-analytics",
    desktopPath: "/dashboards/crm-analytics",
    mobilePath: "/mobile?app=crm&tab=pipeline",
  },
  {
    id: "qa-3",
    name: "Eapproval",
    hint: "Phê duyệt nhanh",
    icon: "apps.todo",
    desktopPath: "/apps/todo",
    mobilePath: "/mobile?app=eapproval&tab=queue",
  },
  {
    id: "qa-4",
    name: "Báo cáo",
    hint: "KPI điều hành",
    icon: "dashboards.sales",
    desktopPath: "/dashboards/sales",
    mobilePath: "/mobile?app=report&tab=summary",
  },
  {
    id: "qa-5",
    name: "Dự án",
    hint: "Tiến độ & nguồn lực",
    icon: "dashboards.projects-board",
    desktopPath: "/dashboards/projects-board",
    mobilePath: "/mobile?app=project&tab=board",
  },
  {
    id: "qa-6",
    name: "Văn thư số",
    hint: "Văn bản nội bộ",
    icon: "prototypes.invoice",
    desktopPath: "/prototypes/invoice/invoice-1",
    mobilePath: "/mobile?app=corp&tab=vps",
  },
  {
    id: "qa-7",
    name: "Lịch họp",
    hint: "Đặt phòng & lịch",
    icon: "dashboards.meetings",
    desktopPath: "/dashboards/meetings",
    mobilePath: "/mobile?app=corp&tab=myday",
  },
  {
    id: "qa-8",
    name: "Hỗ trợ IT",
    hint: "Ticket kỹ thuật",
    icon: "apps.chat",
    desktopPath: "/apps/chat",
    mobilePath: "/mobile?app=profile&tab=support",
  },
];

export const latestNews: NewsItem[] = [
  {
    id: "nang-suat-2026",
    title: "Tập đoàn công bố chương trình nâng cao năng suất 2026",
    source: "Ban điều hành",
    publishedAt: "08:15",
    summary: "Kế hoạch chuẩn hóa vận hành và tối ưu năng suất cho toàn tập đoàn.",
    content:
      "Chương trình năng suất 2026 tập trung vào 3 trụ cột: chuẩn hóa quy trình, số hóa báo cáo và quản trị hiệu suất theo thời gian thực. Các đơn vị cần hoàn tất kế hoạch hành động trong tuần này.",
    image: "/images/preview/01_dashboards.png",
    icon: "dashboards.sales",
  },
  {
    id: "nang-cap-du-lieu",
    title: "Khối công nghệ hoàn tất nâng cấp hạ tầng dữ liệu nội bộ",
    source: "Khối CNTT",
    publishedAt: "09:40",
    summary: "Nền tảng dữ liệu mới giúp đồng bộ báo cáo gần thời gian thực.",
    content:
      "Hạ tầng dữ liệu mới giảm thời gian cập nhật dashboard, tăng độ ổn định tích hợp giữa HRM, CRM, Eapproval và hệ thống báo cáo điều hành.",
    image: "/images/preview/05_responsive.png",
    icon: "dashboards.workspaces",
  },
  {
    id: "dao-tao-du-an",
    title: "Mở đăng ký đào tạo quản trị dự án cho cấp quản lý",
    source: "Khối nhân sự",
    publishedAt: "10:20",
    summary: "Chương trình nâng năng lực quản trị tiến độ và rủi ro dự án.",
    content:
      "Khóa đào tạo gồm các chủ đề quản lý phạm vi, phân bổ nguồn lực và xử lý rủi ro đa dự án. Hạn đăng ký trước thứ Sáu tuần này.",
    image: "/images/preview/04_prototypes.png",
    icon: "dashboards.projects-board",
  },
  {
    id: "attt-2fa",
    title: "Bản tin an toàn thông tin: lưu ý xác thực hai lớp",
    source: "An toàn thông tin",
    publishedAt: "11:05",
    summary: "Khuyến nghị bật 2FA cho toàn bộ tài khoản nghiệp vụ.",
    content:
      "Để giảm rủi ro truy cập trái phép, bộ phận ATTT yêu cầu toàn bộ nhân sự bật xác thực hai lớp trước ngày 15. Hệ thống sẽ nhắc tự động khi đăng nhập.",
    image: "/images/preview/06_darkmode.png",
    icon: "settings.sessions",
  },
];
