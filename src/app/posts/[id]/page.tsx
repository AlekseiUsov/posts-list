// utils
import { firstLetterToUpperCase, getPosts } from "@/utils/utils";

type Props = {
  params: {
    id: number;
  };
};

export default async function Post({ params: { id } }: Props) {
  const post = await getPosts(id);
  const title = firstLetterToUpperCase(post.title);

  return (
    <>
      <div className="grid gap-5 justify-center justify-items-start	mt-20">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="max-w-lg text-xl">{post.body}</p>
      </div>
    </>
  );
}
