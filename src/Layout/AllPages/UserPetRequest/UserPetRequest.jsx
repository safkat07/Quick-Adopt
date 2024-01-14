import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import UseUserRequest from '../../../Hooks/UseUserRequest';
import LoadingSpinner from '../../../Components/UseableComponents/Loader/LoadingSpinner';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import Swal from 'sweetalert2';

const UserPetRequest = () => {
    const [userReq, isLoading] = UseUserRequest()
    const baseURL = UseAxiosBaseURL()

    // const deletePetReq = (_id, oldId) => {
    //     // console.log(_id, oldId);
    //     const updatePetStatus = {
    //         PetStatus: "Not Adopted",
    //     }
    //     baseURL.patch(`/api/v1/allpets/${oldId}`, updatePetStatus)
    //         .then(res => {
    //             console.log('data updateRequest succes', res.data);
    //             const fn = res.data
    //             if (res.data.matchedCount) {
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Adaption Requested Deleted Successfully",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //         })

    //     baseURL.delete(`/api/v1/allreqpets/${_id}`)
    //         .then(res => {

    //         })





    // }
    const deletePetReq = async (_id, oldId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const updatePetStatus = {
                        PetStatus: "Not Adopted",
                    }
                    baseURL.patch(`/api/v1/allpets/${oldId}`, updatePetStatus)
                        .then(res => {
                            console.log('data updateRequest succes', res.data);
                        })
                    // Make a DELETE request using Axios
                    const response = await baseURL.delete(`/api/v1/allreqpets/${_id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            // Include any necessary headers, such as an authorization token
                        }
                    });

                    // Assuming the response contains a 'data' property
                    const responseData = response.data;

                    console.log(responseData);

                    // Check if deletion was successful based on your server response
                    if (responseData && responseData.deletedCount) {
                        console.log('Successfully deleted one document.');
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success'
                        });
                        // window.location.reload();
                    } else {
                        console.log('Deletion unsuccessful or no matching document found.');
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete the file.',
                            icon: 'error'
                        });
                    }
                } catch (error) {
                    console.error('Error deleting favorite:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to delete the file.',
                        icon: 'error'
                    });
                }
            }
        });
    };
    return (
        <MainContainer>
            <MainTitle maintitle={"Your All Requested Pets"}></MainTitle>

            {
                isLoading ? <div className='flex justify-center items-center h-[30vh]'>
                    <LoadingSpinner></LoadingSpinner>
                </div>
                    :
                    <div>
                        {
                            userReq.length == 0 ? <MainTitle maintitle={"Send Request to Adopt Pet"}></MainTitle> :

                                <div className="overflow-x-auto font-maven">
                                    <table className="table ">
                                        {/* head */}
                                        <thead className='text-2xl'>
                                            <tr>
                                                <th>

                                                </th>
                                                <th>Pet Name</th>
                                                <th>Pet Age</th>
                                                <th>Pet Category</th>
                                                <th>Pet Gender</th>
                                                <th>Pet Owner</th>
                                                <th>Pet Status</th>
                                                <th>Action</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        {
                                            userReq.map(pet => <tbody>

                                                <tr key={pet._id} className='text-2xl'>
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" className="checkbox" />
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={pet.PetImage} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{pet.PetName}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {pet.PetAge}

                                                    </td>

                                                    <td>{pet.PetCategory}</td>
                                                    <td>{pet.PetGender}</td>
                                                    <td>{pet.PetOwnerName}</td>
                                                    <td>
                                                        {pet.PetStatus}

                                                    </td>
                                                    <td><button onClick={() => deletePetReq(pet._id, pet.oldId)} className='text-2xl cursor-pointer  border-none bg-red-500 text-white px-2 hover:bg-green-500 transition-all duration-500 rounded-md'>Delete Request</button></td>


                                                </tr>

                                            </tbody>)
                                        }


                                    </table>
                                </div>
                        }
                    </div>
            }

        </MainContainer>
    );
};

export default UserPetRequest;