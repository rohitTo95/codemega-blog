import "./post_view.css";
import {handleShare} from "../../js/helper.js"
import PostViewTag from "../../Components/SubComponents/Tags/PostViewTags";
import { useState } from "react";

export default function PostView() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShareFieldOpen, setIsShareFieldOpen] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "John Doe",
      date: "2023-12-27",
      comment: "Great guide! Thanks for sharing.",
    },
    {
      name: "Jane Smith",
      date: "2023-12-28",
      comment: "This was very helpful, especially for beginners.",
    },
  ]);

  const copyToClipboard = (e) => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        e.target.innerText = "Copied!";
        setTimeout(() => {
          e.target.innerText = "Copy";
        }, 2000); // Revert back to "Copy" after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <section className="w-full h-full flex flex-col items-center justify-center default-spacing mt-40 rounded-lg">
        <article className="w-full flex flex-col items-center">
          {/* Blog Header */}
          <header className="w-full text-left">
            <h1 className="text-7xl my-12 font-bold">
              A Step-by-Step Guide to Create Dockerfile
            </h1>
            <div className="flex items-center justify-between text-2xl">
              <time dateTime="2023-12-27">27 Dec, 2023</time>
              <p>
                Written by <strong>Rohit Dutta</strong>
              </p>
            </div>
          </header>

          {/* Operations Bar */}
          <div
  id="operations-bar"
  className="relative border-t-2 border-b-2 border-gray-400 w-full flex items-center justify-between mt-16 px-16 py-8"
>
  <div className="flex items-center text-2xl gap-6">
    <div className="flex items-center gap-2">
      <i
        className={`${
          isLiked ? "ri-thumb-up-fill" : "ri-thumb-up-line"
        } cursor-pointer`}
        aria-hidden="true"
        onClick={() => setIsLiked(!isLiked)}
      ></i>
      <span>23</span>
    </div>
    <div className="flex items-center gap-2">
      <i
        className="ri-chat-1-line cursor-pointer"
        aria-hidden="true"
      ></i>
      <span>{comments.length}</span>
    </div>
  </div>
  <div className="flex items-center gap-6 text-3xl">
    <i
      className="ri-play-circle-line cursor-pointer"
      aria-hidden="true"
    ></i>
    <i
      className="ri-share-2-line cursor-pointer"
      aria-hidden="true"
      onClick={() => setIsShareFieldOpen(true)}
    ></i>
    <div
      id="copy-post-url-container"
      className={`w-full flex items-center justify-center flex-col gap-8 mt-20 absolute top-0 left-0 ${
        isShareFieldOpen ? "flex" : "hidden"
      }`}
    >
      <i
        className="ri-close-line text-4xl absolute top-8 right-8 cursor-pointer"
        onClick={() => setIsShareFieldOpen(false)}
      ></i>
      <div className="flex items-center flex-wrap justify-center gap-4 mb-6">
        {["facebook", "x-twitter", "linkedin"].map((platform, index) => (
          <a
            key={index}
            href="#"
            className="cursor-pointer w-18 h-18"
            onClick={(e) => handleShare(e, platform)}
          >
            <img
              src={`assets/icons/${platform}.svg`}
              alt={platform}
              className="h-12 w-12"
            />
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center mb-6 w-full">
        <div className="h-px bg-[var(--paragraph-color)] w-1/4"></div>
        <span className="mx-4 text-[var(--paragraph-color)]">or</span>
        <div className="h-px bg-[var(--paragraph-color)] w-1/4"></div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full">
        <input
          type="url"
          name="url"
          id="copy-post-url"
          className="rounded-full px-8 py-4"
          value={window.location.href}
          readOnly
        />
        <button
          className="px-5 py-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={(e) => copyToClipboard(e)}
        >
          Copy
        </button>
      </div>
    </div>
  </div>
</div>


          {/* Blog Image */}
          <img
            id="post-img"
            src="assets/images/jkkkkll.jpg"
            alt="A visual representation related to Dockerfile"
            className="w-full mt-20 rounded-3xl"
          />
        </article>

        {/* Tags */}
        <div className="w-full mt-20 flex flex-col items-start px-12">
          <div className="flex items-start gap-4 flex-wrap">
            <PostViewTag title="Docker" />
            <PostViewTag title="Guide" />
            <PostViewTag title="Technology" />
            <PostViewTag title="Containers" />
          </div>

          {/* Blog Content */}
          <section className="mt-20 flex flex-col items-start gap-4 flex-wrap">
            <div className="flex flex-col gap-8 text-2xl">
              <p>
                This blog is about Dockerfile: Understanding, Benefits, and
                Creation. Whether you’re new to Docker or have been using it for
                a while, this blog will provide valuable information and tips
                for working with Dockerfiles.
              </p>
              <h2>What is Dockerfile?</h2>
              <p>
                A Dockerfile is a script that contains instructions for building
                a customized docker image. Each instruction in a Dockerfile
                creates a new layer in the image, and the final image is
                composed of all the layers stacked on top of each other.
              </p>
              <h2>Benefits of Dockerfile</h2>
              <ul className="list-disc list-inside">
                <li>Simplifies deployment processes</li>
                <li>Provides consistency across environments</li>
                <li>Improves collaboration and version control</li>
              </ul>
              <h2>Sample Dockerfile</h2>
              <pre className="bg-gray-100 p-4 rounded">
                {`# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]`}
              </pre>
            </div>
          </section>

          {/* Related Posts */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold">Related Posts</h2>
            <ul className="list-disc list-inside text-2xl mt-4">
              <li>How to Set Up Docker on Windows</li>
              <li>Top 10 Docker Commands You Must Know</li>
              <li>Building Multi-Stage Dockerfiles for Production</li>
            </ul>
          </section>

          {/* Comments Section */}
          <section className="mt-20 w-full">
            <h2 className="text-3xl font-bold">Comments ({comments.length})</h2>
            <ul className="mt-4 space-y-4 text-2xl">
              {comments.map((comment, index) => (
                <li key={index} className="border-b pb-4">
                  <p>
                    <strong>{comment.name}</strong>{" "}
                    <time dateTime={comment.date}>({comment.date})</time>
                  </p>
                  <p>{comment.comment}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
