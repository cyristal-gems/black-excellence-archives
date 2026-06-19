import { ArchiveClient } from "./components/ArchiveClient";

type HomeProps = {
  searchParams?: Promise<{
    view?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  return <ArchiveClient skipIntro={params?.view === "home"} />;
}
