import useGlobalReducer from "../hooks/useGlobalReducer.jsx"; 

export const Test = () => {
    const {store, dispatch} = useGlobalReducer()
    return (
        <div className="text-center mt-5">
        <h1>{store.fname} {store.lname}</h1>
        <p>The most talented</p>
        </div>
    );
};
