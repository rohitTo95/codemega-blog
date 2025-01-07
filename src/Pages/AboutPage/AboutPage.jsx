import "./about_page.css";
export default function AboutPage() {
    return (
      <>
        <section id="about-us-section" className="default-spacing mt-20flex flex-col items-center justify-between bg-[var(--bg-color)] p-10 md:p-20 gap-10">
          {/* Grid for About Us Heading and Image */}
          <div className="relative w-full h-screen">
            {/* Text Section */}
              <h2 className="text-4xl text-left md:text-6xl font-bold text-[var(--heading-color)]">
                About <span className="block">Us</span>
              </h2>
            {/* Image Section */}
            
              <img
                src="/assets/images/CodeMega-About.jpg"
                alt="About Us"
                className="absolute bottom-0 right-0 max-w-full h-auto rounded-xl shadow-md"
              />
          </div>
  
          {/* Welcome Heading */}
          <div className="text-center w-full mt-60">
            <h1 className="text-8xl font-semibold text-[var(--heading-color)]">
              Welcome to CodeMega!
            </h1>
          </div>
          <div className="mt-32 text-left w-full text-3xl font-regular text-[var(--paragraph-color)] flex flex-col gap-8">
            <p>
            At CodeMega, we believe in the power of curiosity and the magic of learning. Whether you’re just dipping your toes into the world of technology or you’ve been swimming in its vast ocean for years, this is the place where tech enthusiasts come together to explore, grow, and conquer challenges.
            </p>
            <p>Our mission is simple: to make learning tech fun, approachable, and empowering. From coding tips to deep dives into the latest trends in web development, DevOps, cloud computing, AI, ML, and more, we’re here to break down complex ideas and spark your creativity. We’re not just about tutorials and articles; we’re about building a community that shares knowledge, ideas, and a love for innovation.</p>
            <p><span className="font-bold">Why CodeMega?</span> Because we know the tech world is ever-evolving, and keeping up can feel overwhelming. CodeMega is here to simplify that journey. We’ll guide you through the basics, introduce you to cutting-edge concepts, and help you level up your skills—all while keeping things light and engaging.</p>
            <p>Whether you're exploring programming, diving into AI, tinkering with web development, or just trying to understand the buzzwords, CodeMega has something for everyone.</p>
            <p>So, grab a coffee, settle in, and let’s make tech less intimidating and more exciting together. Welcome to the CodeMega family—where learning never stops!</p>
          </div>
        </section>
      </>
    );
  }
  