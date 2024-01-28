const API = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (id?: number) => {
  const url = id ? `${API}/${id}` : API;
  const res = await fetch(url);

  return res.json();
};

export const getPostNumbers = (id?: number) => {
  const from: number = Number(`${id}0`) - 9;
  const to: number = Number(`${id}0`);

  return { from, to };
};

export const firstLetterToUpperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const listNumbers = [1, 2, 3, 4, 5];
