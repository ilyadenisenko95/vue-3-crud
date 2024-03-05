const API_POSTS_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
export const POSTS_PER_PAGE = 4;

export const fetchPosts = async (from = 0, to = POSTS_PER_PAGE) => {
  const response = await fetch(`${API_POSTS_BASE_URL}?_start=${from}&_end=${to}`);
  const result = await response.json();
  return result;
};

export const fetchPost = async (id) => {
  const response = await fetch(`${API_POSTS_BASE_URL}/${id}`);
  const result = await response.json();
  return result;
};
