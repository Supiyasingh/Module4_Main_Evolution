
import React from 'react';
import { Box, Button, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '@/redux/actions/booksActions';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const user = useSelector((state) => state.auth.user);
    const userDetails = JSON.parse(localStorage.getItem("user")) || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddBook = async (id, userId) => {
        if (user) {
            const bookDetails = {
                title: book.title,
                author: book.author,
                coverImage: book.coverImage,
                status: book.status,
                availability: book.availability
            };
            dispatch(addBooks(id, userId, bookDetails));
        } else {
            alert("Please login to add Books");
            navigate("/login");
        }
    };

    return (
        <GridItem 
            w="100%" 
            p={4} 
            borderRadius="lg" 
            boxShadow="md" 
            textAlign="center" 
            bg="white"
            transition="0.3s"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        >
            <VStack spacing={3}>
                <Image 
                    src={book.coverImage} 
                    width="120px" 
                    borderRadius="md" 
                    boxShadow="sm" 
                    alt={book.title} 
                />
                <Text fontSize="lg" fontWeight="bold" color="blue.600">{book.title}</Text>
                <Text fontSize="sm" color="gray.600">{book.author}</Text>
                <Button 
                    onClick={() => handleAddBook(book.id, userDetails?.uid)}
                    bg="blue"
                    size="sm"
                    width="full"
                >
                    Want To Read
                </Button>
            </VStack>
        </GridItem>
    );
};

export default BookCard;
