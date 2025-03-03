// import { login, register } from '@/redux/actions/authActions';
// import { Box ,Button,Input,Text} from '@chakra-ui/react'
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     //state for email and password
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     //handle register

//     const handleLogin=()=>{
//         dispatch(login(email,password));
//         navigate("/mybooks");//redirecting to Login Page
        


//     }
//   return (
//    <Box width={"50%"} m={"10px auto"}>
//     <Text textAlign={"center"}>Login</Text>
//     <Input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//     <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
// <Button onClick={handleLogin} color={"white"} bg={"blue"} m={2} 

// >Login</Button>
//    </Box>

//   )
// }

// export default Login
import { login } from '@/redux/actions/authActions';
import { Box, Button, Input, Text, VStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in all fields."); // Simple validation alert
            return;
        }
        dispatch(login(email, password));
        navigate("/mybooks"); // Redirecting to MyBooks page
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
            <Heading size="lg" textAlign="center" mb={4} color="blue.600">Login</Heading>
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
                    onClick={handleLogin} 
                   
                    bg="blue"
                    width="100%"
                >
                    Login
                </Button>
            </VStack>
        </Box>
    );
};

export default Login;


