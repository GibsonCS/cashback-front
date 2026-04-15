// import Cashback from "./Cashback";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="flex-col ">
      <Outlet />
    </main>
  );
}
