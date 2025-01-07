import "./explore_section.css";
export default function ExploreSection() {
    return (
        <section id="explore-section" class="mt-80 py-20 px-6 ">
      <div class="flex flex-col md:flex-row items-center gap-8 justify-between default-spacing">
         {/* {Left: Image} */}
        <div class="w-auto md:w-full">
          <img src="assets/images/girl-in-lab.png" alt="Technology Illustration" class="rounded-lg h-auto object-cover" />
        </div>
        {/* { Right: Text } */}
        <div class="w-full md:w-1/2  text-center md:text-left space-y-6">
          <h1 class="text-6xl font-bold leading-snug">
            Learn More About Technologies Like
            <span class="text-red-500 block">HTML</span>
          </h1>
          <button class="px-8 py-6 md:px-5 md:py-8 w-3/6 mt-20 rounded-full bg-white text-gray-800 font-semibold shadow-md text-2xl md:text-3xl">
            Explore Now
          </button>
        </div>
      </div>
    </section>
    );
}