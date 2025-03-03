import BookCard from '@/components/BookCard';
import { fetchBooks } from '@/redux/actions/booksActions';
import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const user=useSelector((state)=>state.auth.user);
    const userDetails=JSON.parse(localStorage.getItem("user"))||[];
 const books=useSelector((state)=>state.books.books);
 const loading=useSelector((state)=>state.books.loading);
 const error=useSelector((state)=>state.books.error);
 const dispatch=useDispatch();
    const newBooks=Object.entries(books||[]);
    const booksArray=newBooks.map(([key,value])=>({id:key,...value}));
    // console.log(booksArray, "array of books")
    // console.log(booksArray.length, "array of books")


    useEffect(()=>{
dispatch(fetchBooks());
    },[booksArray])
  return (
<>
   <Heading textAlign={"center"}>Welcome to  Books Library Management App</Heading> 
   {/* {user ? <Text color={"blue"}>Welcome {userDetails.email}</Text>:<Text>Welcom Guest</Text>} */}
   {loading && <Text>Loading...</Text>}
   {error && <Text>{error}</Text>}
   
   <Grid templateColumns="repeat(3, 1fr)" gap="6" m={5}

   >

    {booksArray.map((book)=>{
        return <BookCard key={book.id} book={book}/>
        // <GridItem>
        //     <Image src={book.coverImage} width={"150px"}/>
        //     <Text>{book.title}</Text>
        //     <Text>{book.author}</Text>
        //     <Button>Want To Read</Button>
        // </GridItem>
    })}
</Grid>

   </>
  )
}

export default Home