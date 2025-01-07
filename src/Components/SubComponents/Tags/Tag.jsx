import "./tags.css";
export default function PostTag({title }) {
    return (
        <>
                <div className="post-tag absolute top-12 right-12 bg-opacity-90 py-4 px-8 rounded-full text-xl font-semibold">
                    {title}
                </div>
        </>
    );
}
