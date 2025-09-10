import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useQueryFilters } from "@/hooks";

export const FilterSidebar = () => {
    const { sizes, toggleSize, price, setPrice } = useQueryFilters();

    const availableSizes = [
        { id: "xs", label: "XS" },
        { id: "s", label: "S" },
        { id: "m", label: "M" },
        { id: "l", label: "L" },
        { id: "xl", label: "XL" },
        { id: "xxl", label: "XXL" },
    ];

    const availablePrices = [
        { id: "any", label: "Cualquier precio" },
        { id: "0-50", label: "$0 - $50" },
        { id: "50-100", label: "$50 - $100" },
        { id: "100-200", label: "$100 - $200" },
        { id: "200+", label: "$200+" },
    ];

    return (
        <div className="w-64 space-y-6">
            <div>
                <h3 className="font-semibold text-lg mb-4">Filtros</h3>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h4 className="font-medium">Tallas</h4>
                <div className="grid grid-cols-3 gap-2">
                    {availableSizes.map((size) => (
                        <Button
                            key={size.id}
                            variant={sizes.includes(size.id) ? "default" : "outline"}
                            size="sm"
                            className="h-8"
                            onClick={() => toggleSize(size.id)}
                        >
                            {size.label}
                        </Button>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div className="space-y-4">
                <h4 className="font-medium">Precio</h4>
                <RadioGroup
                    value={price}
                    onValueChange={setPrice}
                    className="space-y-3"
                >
                    {availablePrices.map((p) => (
                        <div key={p.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={p.id} id={p.id} />
                            <Label htmlFor={p.id} className="text-sm cursor-pointer">
                                {p.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
};
