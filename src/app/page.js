import Banner from "@/components/banner/banner";
import FriendList from "@/components/friendList/friendList";

export default function Home() {
  return (
    <div className="px-10 lg:px-60 py-4 lg:py-20 bg-base-200">
      <Banner />
      <FriendList />
    </div>
  );
}
