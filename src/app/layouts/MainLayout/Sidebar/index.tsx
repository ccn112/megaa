// Import Dependencies
import { useMemo, useState } from "react";
import { useLocation } from "react-router";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { navigation } from "@/app/navigation";
import { desktopNavigation } from "@/app/navigation/desktopNavigation";
import { useDidUpdate } from "@/hooks";
import { isRouteActive } from "@/utils/isRouteActive";
import { MainPanel } from "./MainPanel";
import { PrimePanel } from "./PrimePanel";

// ----------------------------------------------------------------------

export type SegmentPath = string | undefined;

export function Sidebar() {
  const { pathname } = useLocation();
  const { name, lgAndDown } = useBreakpointsContext();
  const { isExpanded, close } = useSidebarContext();

  const activeNavigation = useMemo(
    () => (pathname.startsWith("/desktop") ? desktopNavigation : navigation),
    [pathname],
  );

  const [activeSegmentPath, setActiveSegmentPath] = useState<SegmentPath>(
    activeNavigation.find((item) => isRouteActive(item.path, pathname))?.path,
  );

  const currentSegment = useMemo(() => {
    return activeNavigation.find((item) => item.path === activeSegmentPath);
  }, [activeNavigation, activeSegmentPath]);

  useDidUpdate(() => {
    const activePath = activeNavigation.find((item) =>
      isRouteActive(item.path, pathname),
    )?.path;

    setActiveSegmentPath(activePath);
  }, [pathname, activeNavigation]);

  useDidUpdate(() => {
    if (lgAndDown && isExpanded) close();
  }, [name]);

  return (
    <>
      <MainPanel
        nav={activeNavigation}
        activeSegmentPath={activeSegmentPath}
        setActiveSegmentPath={setActiveSegmentPath}
      />
      <PrimePanel
        close={close}
        currentSegment={currentSegment}
        pathname={pathname}
      />
    </>
  );
}
