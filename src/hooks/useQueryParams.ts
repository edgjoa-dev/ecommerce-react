import { useSearchParams } from "react-router";

export const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getParam = (key: string) => searchParams.get(key) || "";

    const setParam = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (!value) {
            newParams.delete(key);
        } else {
            newParams.set(key, value);
        }
        setSearchParams(newParams);
    };

    return {
        getParam,
        setParam,
        all: searchParams,
    };
};
