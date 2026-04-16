import Image from "next/image";
import friendsData from "@/data/friendListData.json";
import Link from "next/link";

export default function FriendList() {
  const statusBadge = {
    "on-track": "bg-green-900",
    overdue: "bg-red-500",
    "almost due": "bg-yellow-500",
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Friend List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center justify-items-center h-full gap-4">
        {friendsData.map((friend) => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="bg-base-100 rounded-lg shadow-sm p-4 flex flex-col items-center gap-1 w-full h-full"
          >
            <Image
              src={friend.picture}
              alt={friend.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
            />
            <h4 className="text-xl font-bold">{friend.name}</h4>
            <p className="text-gray-500 text-sm">
              {friend.days_since_contact}d ago
            </p>
            <div className="flex flex-wrap gap-1">
              {friend.tags.map((tag) => (
                <p
                  key={tag}
                  className={`badge badge-sm bg-green-200 text-emerald-900 capitalize rounded-full`}
                >
                  {tag}
                </p>
              ))}
            </div>
            <p
              className={`badge badge-sm capitalize text-white rounded-full ${statusBadge[friend.status]}`}
            >
              {friend.status}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
