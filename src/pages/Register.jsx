// import { register } from '@/redux/actions/authActions';
// import { Box ,Button,Input,Text} from '@chakra-ui/react'
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     //state for email and password
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     //handle register

//     const handleRegister=()=>{
//         dispatch(register(email,password));
//         navigate("/login");//redirecting to Login Page
        


//     }
//   return (
//    <Box width={"50%"} m={"10px auto"}>
//     <Text textAlign={"center"}>Register</Text>
//     <Input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//     <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
// <Button onClick={handleRegister} color={"white"} bg={"blue"} m={2} 

// >Register</Button>
//    </Box>
//   )
// }

// export default Register ;
import { register } from '@/redux/actions/authActions';
import { Box, Button, Input, Text, VStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!email || !password) {
            alert("Please fill in all fields."); // Simple validation
            return;
        }
        dispatch(register(email, password));
        navigate("/login"); // Redirecting to login page
    };

    return (
        <Box 
            maxW="400px" 
            mx="auto" 
            mt={10} 
            p={6} 
            borderRadius="lg" 
            boxShadow="lg" 
            bg="white"
        >
            <Heading size="lg" textAlign="center" mb={4} color="blue.600">Register</Heading>
            <VStack spacing={4}>
                <Input 
                    type="email" 
                    placeholder="Enter Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    type="password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button 
                    onClick={handleRegister} 
                    bg="blue" 
                    width="100%"
                >
                    Register
                </Button>
            </VStack>
        </Box>
    );
};

export default Register;
