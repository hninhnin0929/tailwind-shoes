import { Card } from "./Card";

export function NewArrivalSection({ items }) {
    return (
        <div className="mt-20">
            <div className="flex items-center justify-center">
                <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
                    NEW ARRIVALS
                </div>
            </div>
            <div className="mt-10 justify-between grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
                {
                    items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}