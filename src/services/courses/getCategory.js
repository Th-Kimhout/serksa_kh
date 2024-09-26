export async function getAllCategories() {
  try {
    const response = fetch(`${import.meta.env.VITE_BASE_URL}categories`).then(
      (res) => res.json()
    );
    const data = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
}
