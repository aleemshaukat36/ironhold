import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";
import { ConfigProvider, Layout } from "antd";
import theme from "@/theme/themeConfig";
import { Content } from "antd/es/layout/layout";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iron Hold",
  description: "Iron Hold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <Layout style={{ width: "100vw", height: "100vh" }}>
              <Content style={{ backgroundColor: "#f3f3f3" }}>
                {children}
              </Content>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
