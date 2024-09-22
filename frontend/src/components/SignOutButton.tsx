import { useMutation, useQueryClient } from "react-query";
import * as appClient from "../api-client"
import { userAppContext } from "../contexts/AppContext";


const SignOutButton = () => {
    const queryClient = useQueryClient();
    const {showToast} = userAppContext();
    const mutation = useMutation(appClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            showToast({message: "Signed out!", type: "SUCCESS"})
        },
        onError: (error: Error) => {
            showToast({message: error.message, type: "ERROR"})
        }
    });

    const handleClick = () => {
        mutation.mutate();
    }
    return (
        <button onClick={handleClick} className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100">
            Sign Out
        </button>
    )
};

export default SignOutButton;