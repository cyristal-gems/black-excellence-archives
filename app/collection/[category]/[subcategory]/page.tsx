import { notFound } from "next/navigation";
import { CollectionClient } from "../../../components/CollectionClient";
import { categories, categoryBySlug, subcategoryBySlug } from "../../../data";

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      category: category.slug,
      subcategory: subcategory.slug,
    })),
  );
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = categoryBySlug(categorySlug);
  const subcategory = subcategoryBySlug(categorySlug, subcategorySlug);

  if (!category || !subcategory) {
    notFound();
  }

  return <CollectionClient category={category} initialSubcategorySlug={subcategory.slug} />;
}
