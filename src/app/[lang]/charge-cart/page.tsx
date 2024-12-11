import { ChargeCardIcon } from "../../icons/icons";
import FormChargeCart from "../../ui/pages/ChargeCart/FormChargeCart";
import HeroChargeCart from "../../ui/pages/ChargeCart/HeroChargeCart";

export default function ChargeCart() {
    return (
        <div className="bg-secondaryDark dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300 py-8">
            <div className="container mx-auto px-0 sm:px-4 flex items-end justify-between gap-2">
                <div className="w-1/2 flex flex-col gap-4 items-center px-12">
                    <HeroChargeCart />
                    <FormChargeCart />
                </div>
                <ChargeCardIcon />
            </div>
        </div>
    )
}
