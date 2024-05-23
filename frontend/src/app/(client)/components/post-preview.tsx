import { type Author } from "../interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-3">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-lg leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </h3>
      <div className="text-md ">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
