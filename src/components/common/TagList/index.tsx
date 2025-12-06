interface TagListProps {
  tags: string[];
  className?: string;
  tagClassName?: string;
}

export function TagList({ tags, className, tagClassName }: TagListProps) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span key={tag} className={tagClassName}>
          {tag}
        </span>
      ))}
    </div>
  );
}
