import BannerStats from "./bannerStats/bannerStats";
import { FiUserPlus } from "react-icons/fi";

export default function Banner() {
  return (
    <div>
      <h2 className="text-5xl text-center font-bold mb-6">
        Friends to keep close in your life
      </h2>
      <p className="text-center text-gray-400 max-w-xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-emerald-900 text-white px-4 py-2 rounded shadow-sm flex items-center gap-2 mx-auto">
        <FiUserPlus /> Add A Friend
      </button>
      <BannerStats />
    </div>
  );
}
