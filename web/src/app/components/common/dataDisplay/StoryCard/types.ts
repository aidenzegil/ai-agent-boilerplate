export type StoryCardProps = {
  likes: number;
  title: string;
  active: boolean;
  onClick: () => void;
  authorPicUrl?: string;
};
