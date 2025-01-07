import "./footer.css"

export default function Footer(){
    return (
        <section class="pt-28 pb-10 border-t border-gray-300 default-spacing mt-48">
        <div class="px-6">
          <div class="flex justify-between items-start pb-8">
            {/* {Logo}  */}
            <div>
              <h1 class="text-6xl md:text-9xl font-bold">CodeMega</h1>
            </div>
            {/* {Links}  */}
            <div class="flex space-x-8 sm:space-x-16">
              <ul class="space-y-2 text-4xl">
                <li class="mt-4"><a href="#" class="hover:underline">Home</a></li>
                <li class="mt-4"><a href="#" class="hover:underline">CSS</a></li>
                <li class="mt-4"><a href="#" class="hover:underline">JavaScript</a></li>
                <li class="mt-4"><a href="#" class="hover:underline">Backend</a></li>
                <li class="mt-4"><a href="#" class="hover:underline">Tips & Tricks</a></li>
              </ul>
              {/* {Right Links} */}
              <ul class="space-y-2 text-4xl">
                <li class="mt-4"><a href="#" class="hover:underline">Contact us</a></li>
                <li class="mt-4"><a href="#" class="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
         {/* { Bottom Row: Copyright } */}
          <div class="mt-28 mb-6 text-center text-gray-500 text-2xl">
            <p>All Copyrights Are Reserved | <a href="https://www.codemega.in" class="hover:underline">www.codemega.in</a>
            </p>
          </div>
        </div>
      </section>
    )
}