import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    var user = await currentUser()
  console.log(user?.emailAddresses)

  return <>{children}</>;
}