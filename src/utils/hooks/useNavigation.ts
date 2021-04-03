import { useHistory } from "react-router-dom";

const useNavigation = () => {
    const history = useHistory();

    const navigate = (url: string) => history.push(url);

    //laziness lvl 99
    const createNavigationHandler = (url: string) => () => history.push(url);

    return {
        navigate,
        createNavigationHandler
    };
};

export default useNavigation;
