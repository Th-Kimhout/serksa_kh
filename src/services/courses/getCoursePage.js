import { BASE_URL } from "../api/base_url";
// get all product
export async function getAllCoursesPage(page, pageSize) {
  try {
    const response = fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }courses?page=${page}&pagesize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // params: {
        //   page: page,
        //   pageSize: pageSize,
        // },
      }
    );
    const data = await response;
    return data?.content;
  } catch (error) {
    console.log(error);
  }
}
