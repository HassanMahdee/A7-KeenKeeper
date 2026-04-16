import friendsData from "@/data/friendListData.json";
export default function BannerStats() {
  const onTrackFriends = friendsData.filter(
    (friend) => friend.status === "on-track",
  );
  const overdueFriends = friendsData.filter(
    (friend) => friend.status === "overdue",
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-8 justify-center items-center">
      <div className="h-32 w-64 mx-auto flex flex-col items-center justify-center bg-base-100 rounded-lg shadow-sm">
        <h4 className="text-2xl font-bold text-emerald-900">
          {friendsData.length}
        </h4>
        <p className="font-light text-gray-500">Total Friends</p>
      </div>
      <div className="h-32 w-64 mx-auto flex flex-col items-center justify-center bg-base-100 rounded-lg shadow-sm">
        <h4 className="text-2xl font-bold text-emerald-900">
          {onTrackFriends.length}
        </h4>
        <p className="font-light text-gray-500">On Track</p>
      </div>
      <div className="h-32 w-64 mx-auto flex flex-col items-center justify-center bg-base-100 rounded-lg shadow-sm">
        <h4 className="text-2xl font-bold text-emerald-900">
          {overdueFriends.length}
        </h4>
        <p className="font-light text-gray-500">Need Attention</p>
      </div>
      <div className="h-32 w-64 mx-auto flex flex-col items-center justify-center bg-base-100 rounded-lg shadow-sm">
        <h4 className="text-2xl font-bold text-emerald-900">0</h4>
        <p className="font-light text-gray-500">Interactions This Month</p>
      </div>
    </div>
  );
}
