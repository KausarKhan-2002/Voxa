// IconButton Component
const IconButton = ({ sidebar, active, setActive }) => {
  const { icon: Icon, behave } = sidebar;

  return (
    <button
      onClick={() => setActive(behave)}
      className={`p-3 rounded-full cursor-pointer transition ${
        active === behave ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      {Icon && <Icon size={20} className="text-white" />} {/* ✅ Fix applied */}
    </button>
  );
};

export default IconButton