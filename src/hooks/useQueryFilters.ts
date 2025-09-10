import { useSearchParams } from "react-router";

/**
 * Hook para manejar params de la URL (query params).
 */


export const useQueryFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getSizes = () => searchParams.get("sizes")?.split(",") || [];

    const toggleSize = (size: string) => {
        const currentSizes = getSizes();

        const newSizes = currentSizes.includes(size)
            ? currentSizes.filter((s) => s !== size)
            : [...currentSizes, size];

        searchParams.set("page", "1");
        searchParams.set("sizes", newSizes.join(","));
        setSearchParams(searchParams);
    };



    //----filters----
    const getViewMode = () => searchParams.get("viewMode") || "grid";

    const setViewMode = (mode: "grid" | "list") => {
        searchParams.set("viewMode", mode);
        setSearchParams(searchParams);
    };



    // ---- Price ----
    const price = searchParams.get("price") || "any";

    const setPrice = (newPrice: string) => {
        searchParams.set("page", "1");
        searchParams.set("price", newPrice);
        setSearchParams(searchParams);
    };

    return {
        //Tallas
        sizes: getSizes(),
        toggleSize,

        //Filtros
        viewMode: getViewMode(),
        setViewMode,

        //Precios
        price,
        setPrice,
    };
};
