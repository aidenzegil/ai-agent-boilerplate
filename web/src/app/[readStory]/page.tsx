import TextArea from "../components/common/inputs/TextArea/component";

export async function generateStaticParams() {
  const story = await fetch("TODO: something").then((res) => res.json());

  return story.map((url: string) => ({
    storyUrl: url,
  }));
}

export default function Page({ params }: { params: { story: string } }) {
  return <TextArea value={params.story} />;
}
