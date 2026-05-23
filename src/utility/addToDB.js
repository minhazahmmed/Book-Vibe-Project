import Swal from "sweetalert2";

// ─── Mark as Read ───────────────────────────────────────────

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};

const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    Swal.fire({
      icon: "warning",
      title: "Already Read!",
      text: "This book already exists in your read list.",
      confirmButtonColor: "#16a34a",
    });
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
    Swal.fire({
      icon: "success",
      title: "Added to Read List!",
      text: "Book successfully added to your read list.",
      confirmButtonColor: "#16a34a",
      timer: 2000,
      timerProgressBar: true,
    });
  }
};

// ─── Add to Wishlist ─────────────────────────────────────────

const getStoredWishlist = () => {
  const storedWishlistSTR = localStorage.getItem("wishList");
  if (storedWishlistSTR) {
    return JSON.parse(storedWishlistSTR);
  }
  return [];
};

const addToWishlistDB = (id) => {
  const storedWishlistData = getStoredWishlist();
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Already Read!",
      text: "You have already read this book. Can't add it to Wishlist.",
      confirmButtonColor: "#16a34a",
    });
  } else if (storedWishlistData.includes(id)) {
    Swal.fire({
      icon: "warning",
      title: "Already in Wishlist!",
      text: "This book already exists in your wishlist.",
      confirmButtonColor: "#16a34a",
    });
  } else {
    storedWishlistData.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedWishlistData));
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist! ❤️",
      text: "Book successfully added to your wishlist.",
      confirmButtonColor: "#16a34a",
      timer: 2000,
      timerProgressBar: true,
    });
  }
};

export { addToStoreDB, addToWishlistDB };