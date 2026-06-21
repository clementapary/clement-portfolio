import React from "react";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 text-3xl font-bold text-blue-400 capitalize">
      {title}
    </div>
  );
}
