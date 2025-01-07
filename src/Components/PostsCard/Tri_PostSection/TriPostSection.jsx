import PostTag from "../../SubComponents/Tags/Tag";
import "./tri_post_section.css";

export default function TriPostSection() {
    return (
      <section className="post-section mt-60 default-spacing mb-8">
        {/* Section Header */}
        <div className="mt-20 mb-16 flex flex-col items-center justify-center">
          <h2 className="text-7xl font-bold">Recent Posts</h2>
          <img
            src="assets/images/line.png"
            alt="Divider Line"
            className="w-84 mt-8 line-img"
          />
        </div>
  
        {/* Posts Grid */}
        <div
          id="post-list"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40 justify-items-center"
        >
          {/* First Card */}
          <div className="top-post post-card col-span-1 md:col-span-2 flex flex-col md:flex-row gap-12 items-start w-full">
          <div className="relative w-full md:w-4/5 pr-0 md:pr-6">
          <img src="\assets\images\image.png" alt="" className="object-cover w-full"/>
          <PostTag title="Underwater" />
          </div>
            <div className="flex flex-col justify-center gap-4 w-full md:w-4/5">
              <h1 className="text-5xl md:text-7xl font-semibold">
                Exploring the Depths: Underwater Adventures Await
              </h1>
              <p className="mt-2 text-2xl md:text-3xl font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                veritatis, harum distinctio exercitationem fuga praesentium...
              </p>
              <button className="mt-5 md:mt-9 px-5 py-4 md:px-5 md:py-8 bg-black text-white text-2xl md:text-3xl rounded-full w-1/4 md:w-5/12 border-2 border-black">
                Read More
              </button>
            </div>
          </div>
  
          {/* Second Card */}
          <div className="post-card flex flex-col gap-4 col-span-1">
          <div className="relative w-full md:w-4/5 pr-0 md:pr-6">
          <img src="\assets\images\image.png" alt="" className="object-cover w-full"/>
          <PostTag title="Underwater" />
          </div>
            <div className="flex flex-col gap-2">
              <h2 className="mt-8 text-4xl md:text-6xl font-semibold">
                Into the Wild: Trekking Through Untamed Landscapes
              </h2>
              <p className="mt-2 text-xl md:text-3xl font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nulla, ex sapiente id distinctio mollitia...
              </p>
              <button className="rounded-full w-1/4 md:w-5/12 mt-9 px-8 py-4 md:px-5 md:py-8 bg-black text-white text-2xl md:text-3xl border-2 border-black">
                Read More
              </button>
            </div>
          </div>
  
          {/* Third Card */}
          <div className="post-card flex flex-col gap-4 col-span-1">
          <div className="relative w-full md:w-4/5 pr-0 md:pr-6">
          <img src="\assets\images\image.png" alt="" className="object-cover w-full"/>
          <PostTag title="Underwater" />
          </div>
            <div className="flex flex-col gap-2">
              <h2 className="mt-8 text-4xl md:text-6xl font-semibold">
                Urban Exploration: Discovering Hidden Gems
              </h2>
              <p className="mt-2 text-xl md:text-3xl font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nulla, ex sapiente id distinctio mollitia...
              </p>
              <button className="rounded-full w-1/4 md:w-5/12 mt-9 px-8 py-4 md:px-5 md:py-8 bg-black text-white text-2xl md:text-3xl border-2 border-black">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  