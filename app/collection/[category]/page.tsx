import { notFound } from "next/navigation";
import { CollectionClient } from "../../components/CollectionClient";
import { categories, categoryBySlug } from "../../data";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <CollectionClient category={category} />;
}
