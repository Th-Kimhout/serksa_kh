// src/services/user/userAction.js

import { getAccessToken } from "../../lib/secureLocalStorage";

export async function fetchCourseCard(courseID) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/courses/${courseId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAccessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching course");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
}

export async function fetchWatchLaterCourses() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/me/favorites`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAccessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching Watch Later courses");
    }
    return await response.json(); // Return the list of Watch Later courses
  } catch (error) {
    console.error("Error fetching Watch Later courses:", error);
    throw error;
  }
}

export async function checkIfWatchLater() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/me/favorites/${courseId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAccessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error checking Watch Later status");
    }
    return await response.json();
  } catch (error) {
    console.error("Error checking Watch Later status:", error);
    throw error;
  }
}

export async function addToWatchLater(userId, courseId) {
  console.log(userId, courseId);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}users/${userId}/favorites/${courseId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function removeFromWatchLater(courseID) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/me/favorites/${courseID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error removing course from Watch Later");
    }
  } catch (error) {
    console.error("Error removing course from Watch Later:", error);
    throw error;
  }
}

export async function getUserInfo() {
  try {
    const response = fetch(`${import.meta.env.VITE_BASE_URL}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }).then((res) => res.json());
    const data = await response;

    return data;
  } catch (error) {
    console.log(error);
  }
}
