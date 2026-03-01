export interface DesktopMenuItem {
  key: string;
  label: string;
  description: string;
  mobileAppKey: string;
  mobileTabKey: string;
}

export interface DesktopMenuGroup {
  key: string;
  label: string;
  icon: string;
  mobileTabKey: string;
  items: DesktopMenuItem[];
}

export const desktopMenuMap: DesktopMenuGroup[] = [
  {
    key: "home",
    label: "Home",
    icon: "dashboards",
    mobileTabKey: "home",
    items: [
      {
        key: "overview",
        label: "Tổng quan",
        description: "Bức tranh nhanh về bản tin, lịch họp và KPI trong ngày.",
        mobileAppKey: "corp",
        mobileTabKey: "home",
      },
      {
        key: "news",
        label: "Bản tin",
        description: "Tin tức và thông báo nội bộ ưu tiên hiển thị theo đơn vị.",
        mobileAppKey: "corp",
        mobileTabKey: "home",
      },
    ],
  },
  {
    key: "vp-so",
    label: "VP Số",
    icon: "apps",
    mobileTabKey: "vps",
    items: [
      {
        key: "van-thu",
        label: "Văn thư",
        description: "Quản lý văn bản đến/đi và trạng thái xử lý hồ sơ số.",
        mobileAppKey: "corp",
        mobileTabKey: "vps",
      },
      {
        key: "phong-hop",
        label: "Phòng họp",
        description: "Đặt phòng họp và đồng bộ lịch họp liên phòng ban.",
        mobileAppKey: "corp",
        mobileTabKey: "vps",
      },
    ],
  },
  {
    key: "myday",
    label: "MyDay",
    icon: "forms",
    mobileTabKey: "myday",
    items: [
      {
        key: "tasks",
        label: "Việc của tôi",
        description: "Danh sách công việc ưu tiên và deadline cần xử lý hôm nay.",
        mobileAppKey: "corp",
        mobileTabKey: "myday",
      },
      {
        key: "reminders",
        label: "Nhắc việc",
        description: "Các lịch nhắc và cảnh báo cá nhân đồng bộ từ hệ thống.",
        mobileAppKey: "corp",
        mobileTabKey: "myday",
      },
    ],
  },
  {
    key: "community",
    label: "Cộng đồng",
    icon: "components",
    mobileTabKey: "community",
    items: [
      {
        key: "forum",
        label: "Diễn đàn",
        description: "Không gian thảo luận chuyên môn và chia sẻ kiến thức nội bộ.",
        mobileAppKey: "corp",
        mobileTabKey: "community",
      },
      {
        key: "clubs",
        label: "CLB nội bộ",
        description: "Thông tin hoạt động cộng đồng, sự kiện và đăng ký tham gia.",
        mobileAppKey: "corp",
        mobileTabKey: "community",
      },
    ],
  },
  {
    key: "more",
    label: "Thêm nữa",
    icon: "docs",
    mobileTabKey: "more",
    items: [
      {
        key: "internal-apps",
        label: "App nội bộ",
        description: "Danh sách HRM, CRM, Eapproval, Báo cáo, Dự án và chuyển app.",
        mobileAppKey: "corp",
        mobileTabKey: "more",
      },
      {
        key: "ca-nhan",
        label: "Thông tin cá nhân",
        description: "Hồ sơ cá nhân, thiết lập tài khoản và bảo mật.",
        mobileAppKey: "profile",
        mobileTabKey: "overview",
      },
      {
        key: "settings",
        label: "Cài đặt",
        description: "Thiết lập giao diện và tùy chọn làm việc trên desktop.",
        mobileAppKey: "profile",
        mobileTabKey: "settings",
      },
    ],
  },
];
