import Link from "next/link";

// utils
import {
  firstLetterToUpperCase,
  getPostNumbers,
  getPosts,
} from "@/utils/utils";

type Props = {
  params: {
    id?: number;
  };
};

export default async function PostList(props: Props) {
  const { id } = props.params;
  const { from, to } = getPostNumbers(id);

  const data = await getPosts();
  const posts = data.slice(from - 1, to);

  return (
    <ul className="grid gap-4 grid-cols-2 m-10">
      {posts.map((post: IPost) => {
        const title = firstLetterToUpperCase(post.title);

        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-bold">
                <span>{post.id}.</span> {title}
              </h2>
              <p>{post.body}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
