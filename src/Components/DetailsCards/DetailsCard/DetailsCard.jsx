import "./details_card.css"
export default function DetailsCard({number, content}) {
    return (
        <div className="details-card w-full h-48 flex flex-col justify-center items-center bg-[var(secondary-color)] rounded-lg p-8 gap-4">
            <span className="text-4xl font-bold">{number}</span>
            <p className="text-4xl font-medium mt-4 text-center">{content}</p>
        </div>
    )
}