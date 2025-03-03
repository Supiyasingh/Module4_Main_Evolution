import { logout } from '@/redux/actions/authActions';
import { HStack, Text,Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MyBooksPage = () => {
    const user=useSelector((state)=>state.auth.user);
    const userDetails=JSON.parse(localStorage.getItem("user"))||[];
    //console.log(userDetails.uid, "userdetails");
   
    const books=JSON.parse(localStorage.getItem("books"));
    console.log(books)

    const dispatch=useDispatch();
    const navigate=useNavigate();

    //logout function

   const handleLogout=()=>{
        dispatch(logout());
        navigate("/");
    }
  return (
    <>
  
    <HStack>
        <Button ml={"90%"} mt={2}
        onClick={handleLogout}
        >Logout</Button>
       
    </HStack>
    </>
  )
}

export default MyBooksPage
