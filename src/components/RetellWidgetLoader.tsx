"use client";

import dynamic from "next/dynamic";

const RetellWidget = dynamic(() => import("@/components/RetellWidget"), {
  ssr: false,
});

export default function RetellWidgetLoader() {
  return <RetellWidget />;
}
