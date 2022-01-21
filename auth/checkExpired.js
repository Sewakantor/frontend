import { useJwt } from "react-jwt";
import { useDispatch } from "react-redux";

const checkExpired = (token) => {
    const {isExpired } = useJwt(token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isExpired) {
            dispatch(
                logoutUser()
            )
        }
    }, [isExpired,dispatch]);
    
}

export const {checkExpired};