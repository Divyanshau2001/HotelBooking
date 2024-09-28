import { useMutation } from "react-query";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { userAppContext } from "../contexts/AppContext";
import * as apiClient from '../api-client'


const AddHotel = () => {
    const {showToast} = userAppContext();
    const {mutate, isLoading} = useMutation(apiClient.addMyHotel, {
        onSuccess: () => {
            showToast({message: "Hotel Saved!", type: "SUCCESS"})
        },
        onError: () => {
            showToast({message: "Error Saving Hotel", type: "ERROR"});
        }

    });
    const handleSave = (hotelFormData: FormData) => {
        mutate(hotelFormData)
    }

    return (
        <ManageHotelForm onSave = {handleSave} isLoading = {isLoading} />
    )
}

export default AddHotel;