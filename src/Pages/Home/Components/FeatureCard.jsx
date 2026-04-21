export const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
  <div className="flex items-center shadow-md cursor-pointer gap-4 p-4 rounded-2xl bg-white border border-black/10 duration-700 ease-in-out transition-all">
      <div
        className={` group p-2  rounded-xl ${bgColor}`}
      >
        <div className="group-hover:rotate-180 transition-all ease-in-out duration-400">
  {icon}
        </div>
      
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
