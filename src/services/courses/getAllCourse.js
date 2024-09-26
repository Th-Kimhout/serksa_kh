import { BASE_URL } from "../api/base_url";
// get all product
export async function getAllCourses() {
  try {
    const response = fetch(`${BASE_URL}courses`).then((res) => res.json());
    const data = await response;
    // console.log("data in function",data);
    return data?.content;
  } catch (error) {
    console.log(error);
  }
}
// get single course
export async function getSingleCourses(slug) {
  try {
    const response = fetch(
      `${BASE_URL}courses/slug/${slug}?part=CONTENT_DETAILS`
    ).then((res) => res.json());
    const data = await response;
    // console.log("data in function",data2);
    return data;
  } catch (error) {
    console.log(error);
  }
}
