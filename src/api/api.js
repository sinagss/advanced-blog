const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function getPosts() {
  return fetch(BASE_URL + "/posts")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
// export async function getPosts() {
//   const response = await fetch(BASE_URL + "/posts");
//   const data = await response.json();
//   return data;
// }

// export const api = () => {
//   const getPosts = async() => {
//     const posts = await fetch(BASE_URL + "/posts")
//       .then((response) => response.json)
//       .then((data) => {
//         return data;
//       });
//     console.log(posts);
//     return posts;
//   };
//   return { getPosts };
// };

export async function getComments() {
  const response = await fetch(BASE_URL + "/comments");
  return await response.json();
}

export async function getAlbums() {
  const response = await fetch(BASE_URL + "/albums");
  return await response.json();
}

export async function getPhotos() {
  const response = await fetch(BASE_URL + "/photos");
  return await response.json();
}

export async function getTodos() {
  const response = await fetch(BASE_URL + "/todos");
  return await response.json();
}

export async function getUsers() {
  const response = await fetch(BASE_URL + "/users");
  return await response.json();
}

export async function getPost(postId) {
  const response = await fetch(BASE_URL + `/posts/${postId}`);
  return await response.json();
}

export async function filterUserPosts(userId) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return await response.json();
}
