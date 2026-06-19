"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type MouseEvent } from "react";
import { profileLifespan, profilePreview, profilesFor, type ArchiveCategory, type Profile } from "../data";
import { PortraitFrames } from "./PortraitFrames";
import { ProfileModal } from "./ProfileModal";

type CollectionClientProps = {
  category: ArchiveCategory;
  initialSubcategorySlug?: string;
};

const reloadArchive = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  window.location.assign("/");
};

export function CollectionClient({ category, initialSubcategorySlug = "all" }: CollectionClientProps) {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [activeSection, setActiveSection] = useState(initialSubcategorySlug);

  const groupedSections = useMemo(
    () =>
      category.subcategories.map((subcategory) => ({
        subcategory,
        people: profilesFor(category.slug, subcategory.slug),
      })),
    [category],
  );

  const visibleSections =
    activeSection === "all"
      ? groupedSections
      : groupedSections.filter(({ subcategory }) => subcategory.slug === activeSection);

  return (
    <>
      <main className="collection-shell">
        <header className="collection-header">
          <Link className="brand-pill" href="/" onClick={reloadArchive}>
            B.E.A
          </Link>
          <Link className="home-button" href="/?view=home">
            Home
          </Link>
        </header>

        <section className={`collection-hero collection-hero-${category.slug}`} aria-labelledby="collection-title">
          <Image src={category.image} alt="" fill sizes="100vw" priority />
          <div className="collection-hero-shade" />
          <div className="collection-title-lockup">
            <p>Collection</p>
            <h1 id="collection-title">{category.name}</h1>
            <span>{category.summary}</span>
          </div>
        </section>

        <section className="collection-controls" aria-label="Collection view options">
          <label htmlFor="section-picker">View</label>
          <select id="section-picker" value={activeSection} onChange={(event) => setActiveSection(event.target.value)}>
            <option value="all">All sections</option>
            {category.subcategories.map((subcategory) => (
              <option key={subcategory.slug} value={subcategory.slug}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </section>

        <section className="collection-sections" aria-label={`${category.name} profiles by subcategory`}>
          {visibleSections.map(({ subcategory, people }) => (
            <section className="collection-subsection" key={subcategory.slug} aria-labelledby={`${subcategory.slug}-title`}>
              <div className="collection-subsection-header">
                <p>Section</p>
                <h2 id={`${subcategory.slug}-title`}>{subcategory.name}</h2>
              </div>
              <div className="collection-grid">
                {people.map((profile) => (
                  <CollectionCard key={profile.id} profile={profile} onSelect={setSelectedProfile} />
                ))}
              </div>
            </section>
          ))}
        </section>
      </main>
      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </>
  );
}

function CollectionCard({
  profile,
  onSelect,
}: {
  profile: Profile;
  onSelect: (profile: Profile) => void;
}) {
  return (
    <article className="collection-card">
      <button
        className="collection-card-image"
        type="button"
        onClick={() => onSelect(profile)}
      >
        <PortraitFrames profile={profile} sizes="(max-width: 720px) 72vw, 280px" />
      </button>
      <div>
        <p>{profile.name}</p>
        <span className="profile-lifespan">{profileLifespan(profile)}</span>
        <span>{profilePreview(profile)}</span>
      </div>
      <button
        className="collection-bio-button"
        type="button"
        onClick={() => onSelect(profile)}
      >
        Open Bio
      </button>
    </article>
  );
}
