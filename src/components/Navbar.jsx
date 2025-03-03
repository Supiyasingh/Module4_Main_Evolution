// import { Flex, Text, useSelect } from '@chakra-ui/react'
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     const user=useSelector((state)=>state.auth.user);
//     const userDetails=JSON.parse(localStorage.getItem("user"))||[];
   

//   return (
//     <Flex
//     as="nav"
//     bg="blue.500"
//     color="white"
//     justify={"space-between"}
//     p={3}
//     m={2}
//     align={"center"}
//   >
//         <Text>My Library</Text>
      
       
     
// {user ?  <Flex justifyContent={"space-evenly"} gap={4} p={2}>
//     <Link to="/mybooks">MyBooks</Link>
//     <Link to="/">Home</Link>
//     <Link to="/register">Register</Link> 
//     <Text>Logged in as :{userDetails.email}</Text></Flex> : 
//    <Flex justifyContent={"space-evenly"} gap={4} p={2}> <Link to="/login">Login</Link> </Flex>
 
// }
//        </Flex>
//   )
// }

// export default Navbar
import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { logout } from '@/redux/actions/authActions';
const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    const userDetails = JSON.parse(localStorage.getItem("user")) || {};
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logout());
    };
    return (
        <Flex
            as="nav"
            bg="blue.500"
            color="white"
            justify="space-between"
            align="center"
            p={3}
            px={6}
            width="100vw"
        >
            <Text fontSize="xl" fontWeight="bold">My Library</Text>

            {user ? (
                <Flex gap={6}>
                    <Link as={RouterLink} to="/mybooks" color="white" _hover={{ textDecoration: "underline" }}>My Books</Link>
                    <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "underline" }}>Home</Link>
                    <Link as={RouterLink} onClick={handleLogout} to="/logout" color="white" _hover={{ textDecoration: "underline" }}>Logout</Link>
                    <Text>Logged in as: {userDetails.email || "Guest"}</Text>
                </Flex>
            ) : (
             

                <Flex gap={6}>
                <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "underline" }}>Home</Link>
                <Link as={RouterLink} to="/register" color="white" _hover={{ textDecoration: "underline" }}>Register</Link>
                    <Link as={RouterLink} to="/login" color="white" _hover={{ textDecoration: "underline" }}>Login</Link>
                </Flex>
            )}
        </Flex>
    );
};

export default Navbar;

