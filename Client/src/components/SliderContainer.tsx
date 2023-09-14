import  Tilt from "react-parallax-tilt";
import Card from "./Card";
export interface PostData {
  id: number;
  title: string;
  date: string;
  background:string;
  likes?: number;
  comments?: number;
}
const Posts: PostData[] = [
  {
    id: 1,
    title: "Being a good mentor - a developers guide",
    background: "bg-back-blue",
    date: "Jul 19 • 19m read",
    likes: 12,
    comments: 2,
  },
  {
    id: 2,
    title: "Being a good mentor - a developers guide",
    background: "bg-back-purple",
    date: "Aug 19 • 20m read",
    likes: 4,
    comments: 5,
  },
  {
    id: 3,
    title: "Semi-structured data modeling| Firebolt",
    background: "bg-back-pink",
    date: "Jan 1 • 11m read",
    likes: 10,
    comments: 3,
  },
  {
    id: 4,
    title: "Building Dynamic Websites With AI-Generated Content Automation",
    background: "bg-back-brinjal",
    date: "Dec 23 • 3m read",
  },
];
function SliderContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {Posts.map((PostElement) => {
        return (
          <>
            <Tilt
              tiltEnable={false}
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor= {"purple-500"}
              glarePosition="all"
              key={PostElement.id}
            >
              <Card PostElement={PostElement}></Card>
            </Tilt>
          </>
        );
      })}
    </div>
  );
}

export default SliderContainer;
