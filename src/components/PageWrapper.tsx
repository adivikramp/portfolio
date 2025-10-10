import type { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen w-full font-poppins">{children}</main>;
};

export default PageWrapper;
