import {useSelector, useDispatch} from "react-redux";
import {setPostsIsLoading, setPosts, setPostsError} from './';

export const usePostsFetcher = () => {
    const dispatch = useDispatch();

    return (payload) => {
        dispatch(setPosts(payload));
    };
};
export const usePostsSetLoading = () => {
    const dispatch = useDispatch();

    return () => {
        dispatch(setPostsIsLoading());
    };
};
export const usePostsSetError = () => {
    const dispatch = useDispatch();

    return (payload) => {
        dispatch(setPostsError(payload));
    };
};
