import DetailsCard from "../DetailsCard/DetailsCard"
export default function DetailsCardContainer() {
    return (
        <section className="default-spacing my-40">

            <div className="details-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 px-8">
                <DetailsCard number={34} content="Users" />
                <DetailsCard number={34} content="Users" />
                <DetailsCard number={34} content="Users" />
                <DetailsCard number={34} content="Users" />
                <DetailsCard number={34} content="Users" />
                <DetailsCard number={34} content="Users" />
                <DetailsCard number={34} content="Users" />
            </div>
        </section>
    )
}