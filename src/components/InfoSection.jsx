import React from "react";

export default function InfoSection({ title, children }) {
  return (
    <section>
      <h2 className="text-neutral-900 text-lg md:text-xl lg:text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-neutral-600 text-sm leading-relaxed">{children}</p>
    </section>
  );
}
