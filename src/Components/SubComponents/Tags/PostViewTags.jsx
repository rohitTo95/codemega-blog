import "./post_view_tags.css"
export default function PostViewTag({title}) {
    return (
        <>
            <div class="tags cursor-pointer flex items-center justify-center rounded-full  px-6 py-3 text-md shadow-md ">{title}</div>
        </>
    );
}