"use client";

import { usePathname } from "next/navigation";

const useGetPageName = () => {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];

  if (!segment) return "Home";

  return segment.charAt(0).toUpperCase() + segment.slice(1);
};

export default useGetPageName;
