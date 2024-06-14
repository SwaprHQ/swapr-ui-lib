import { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => (
  <section className="space-y-4 py-12 border-b">{children}</section>
);
