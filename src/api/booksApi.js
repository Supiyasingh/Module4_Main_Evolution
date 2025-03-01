export const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://books-library-management-app-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) throw new Error("Failed to fetch books");
  
      const data = await response.json();
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    } catch (error) {
      console.error("API Fetch Error:", error);
      return [];
    }
  };
  