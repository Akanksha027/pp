import { mainFont } from "@/lib/fonts";

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={mainFont.className}>{children}</div>;
}
