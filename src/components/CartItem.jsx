import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";

export function CardItem({ item }) {
    return (
        <div className="cursor-pointer space-y-2 bg-gray-100 p-2 hover:bg-[#DAFFA2]">
            <div className="flex space-x-2">
                {/* Image */}
                <img className="h-24" src={item.src} />
                {/* Title and Description */}
                <div className="space-y-2">
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-gray-400">
                        {item.description}
                    </div>
                </div>
                {/* Price */}
                <div className="font-bold">{item.price}$</div>
            </div>

            <div className="flex justify-between pl-30">
                <div className="flex space-x-6">
                    <div>
                        <div className="font-bold">SIZE</div>
                        <Select title="SIZES" options={SIZES} />
                    </div>
                    <div>
                        <div className="font-bold">QTY</div>
                        <Select title="QTY" options={QTY} />
                    </div>
                </div>
                <button>
                    <CiTrash size={25} className="text-black" />
                </button>
            </div>
        </div>

    );
}
