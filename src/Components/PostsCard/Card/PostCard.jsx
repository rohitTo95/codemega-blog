export default function PostCard({img, postTitle, content}) {
    return (
        <>
        <div class="bg-[var(--secondary-color)] rounded-xl shadow-lg overflow-hidden">
  <img src={img} alt="Card Image" class="w-full h-80 object-cover"/>
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2 text-[var(--heading-color)]">
      {postTitle}
    </h3>
    <p class="text-[var(--paragraph-color)] mb-4">
      {content}
    </p>
    <button class="bg-[var(--button-bg-color)] text-[var(--button-text-color)] rounded-full px-6 py-2 hover:bg-[var(--primary-color)]">
      Read More
    </button>
  </div>
</div>
        </>
    );
}