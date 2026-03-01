import { Navigate, useLocation, useOutlet } from "react-router";

import { detectDeviceType } from "@/utils/dom/detectDeviceType";

const MOBILE_ENTRY_PATH = "/mobile";
const WEB_ENTRY_PATH = "/desktop/home/overview";

export default function DeviceGuard() {
  const outlet = useOutlet();
  const { pathname } = useLocation();

  const deviceType = detectDeviceType();
  const isMobile = deviceType === "phone";
  const isMobilePath = pathname.startsWith(MOBILE_ENTRY_PATH);

  if (isMobile && !isMobilePath) {
    return <Navigate to={MOBILE_ENTRY_PATH} replace />;
  }

  if (!isMobile && isMobilePath) {
    return <Navigate to={WEB_ENTRY_PATH} replace />;
  }

  return <>{outlet}</>;
}
