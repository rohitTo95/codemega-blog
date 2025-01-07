import "./error_page.css";

export default function ErrorPage() {
    return (
        <>
            <section class="mb-80 mt-24 h-screen flex flex-col items-center justify-center px-6 text-center">
        <img
                src={`${import.meta.env.VITE_BASE_URL.replace(/\/+$/, "")}/assets/images/404.png`}
                alt="404 error illustration"
                class="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        />

        <h3 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-8">
            404 ERROR
        </h3>

        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-4">
            The page you are looking for does not exist.
        </p>

        <a 
                id="back-button"
                href={import.meta.env.VITE_BASE_URL.replace(/\/+$/, "")}
                class="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl md:text-2xl rounded-full font-bold mt-8  transition duration-300 ease-in-out"
        >
            Go Back
        </a>
    </section>
        </>
    );
}