import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="bg-red-500">
        <Outlet />
      </div>
    </>
  );
}
