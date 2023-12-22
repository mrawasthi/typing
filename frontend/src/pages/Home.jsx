import Topbar from "../Components/topbar/Topbar";
import Sidebar from "../Components/sidebar/Sidebar";
import Feed from "../Components/feed/Feed";
import Rightbar from "../Components/rightbar/Rightbar";
import '../Scss/Home.scss';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
