import { useLocation } from "react-router-dom";

const useQuery = (param: string) => {
    const { search } = useLocation();
    return new URLSearchParams(search).get(param);
};

export default useQuery;
