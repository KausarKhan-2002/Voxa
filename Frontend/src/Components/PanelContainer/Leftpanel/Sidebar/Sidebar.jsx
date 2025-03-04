import { useState } from "react";
import { sidebarBottom, sidebarTop } from "../../../../utils/sidebarIcon";
import IconButton from "../../../../utils/IconButton";

const Sidebar = () => {
  const [active, setActive] = useState("chats");

  return (
    <div className="bg-slate-700 py-5 px-3 text-xl flex flex-col h-[94vh] text-slate-300 gap-4 border-r-2 border-slate-600">
      {/* Top Icon */}
      <div className="flex flex-col gap-2">
        {sidebarTop.map((sidebar) => (
          <IconButton
            key={sidebar.id}
            sidebar={sidebar}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>

      <div className="flex-1" />

      {/* Bottom Icon */}
      <div className="flex flex-col gap-2">
        {sidebarBottom.map((sidebar) => (
          <IconButton
            key={sidebar.id}
            sidebar={sidebar}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
