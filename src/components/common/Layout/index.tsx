import React, { PropsWithChildren } from "react";
import { LayoutContainer } from "./style";

const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
