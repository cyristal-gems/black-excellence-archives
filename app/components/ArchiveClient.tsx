"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import {
  archiveName,
  archiveSummary,
  archiveTagline,
  categories,
  featuredProfile,
  profileLifespan,
  profilePreview,
  type ArchiveCategory,
  type Profile,
  type Subcategory,
} from "../data";
import { CuratorModal } from "./CuratorModal";
import { ProfileModal } from "./ProfileModal";
import { PortraitFrames } from "./PortraitFrames";

const heroQuotes = [
  '"Define yourself for yourself." - Toni Morrison',
  '"Not everything that is faced can be changed, but nothing can be changed until it is faced." - James Baldwin',
  '"We are the ones we have been waiting for." - June Jordan',
  '"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly." - Langston Hughes',
  '"If they don\'t give you a seat at the table, bring a folding chair." - Shirley Chisholm',
];

const reloadArchive = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  if (window.location.pathname === "/" && !window.location.search) {
    window.location.reload();
    return;
  }

  window.location.assign("/");
};

export function ArchiveClient({ skipIntro = false }: { skipIntro?: boolean }) {
  const [introState, setIntroState] = useState<"waiting" | "exiting" | "done">(skipIntro ? "done" : "waiting");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isCuratorOpen, setIsCuratorOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    if (skipIntro && window.location.search) {
      window.history.replaceState(null, "", "/");
    }
  }, [skipIntro]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setQuoteIndex((currentIndex) => (currentIndex + 1) % heroQuotes.length);
    }, 8 * 60 * 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const shelves = Array.from(document.querySelectorAll<HTMLElement>("[data-carousel]"));
    const timers = shelves.map((shelf, index) => {
      const delay = 2800 + index * 180;

      return window.setInterval(() => {
        if (shelf.matches(":hover") || shelf.dataset.animating === "true") {
          return;
        }

        const card = shelf.querySelector<HTMLElement>(".spotlight-card");
        const cards = Array.from(shelf.querySelectorAll<HTMLElement>(".spotlight-card"));
        const step = card ? card.offsetWidth + 16 : shelf.clientWidth;
        const maxScroll = shelf.scrollWidth - shelf.clientWidth;

        if (maxScroll <= 8 && cards.length > 1) {
          shelf.dataset.animating = "true";

          Promise.all(
            cards.map((item) =>
              item
                .animate([{ transform: "translateX(0)" }, { transform: `translateX(-${step}px)` }], {
                  duration: 850,
                  easing: "cubic-bezier(0.42, 0, 0.2, 1)",
                })
                .finished.catch(() => undefined),
            ),
          ).then(() => {
            shelf.append(cards[0]);
            shelf.dataset.animating = "false";
          });

          return;
        }

        const nextLeft = shelf.scrollLeft + step >= maxScroll - 8 ? 0 : shelf.scrollLeft + step;

        shelf.scrollTo({
          left: nextLeft,
          behavior: "smooth",
        });
      }, delay);
    });

    return () => timers.forEach((timer) => window.clearInterval(timer));
  }, []);

  const enterArchive = () => {
    setIntroState("exiting");
    window.setTimeout(() => setIntroState("done"), 1200);
  };

  return (
    <>
      {introState !== "done" ? <LoadingIntro state={introState} onEnter={enterArchive} /> : null}
      <main className={`site-shell ${introState === "done" ? "site-shell-entered" : ""}`}>
        <header className="topbar" aria-label="Black Excellence Archives">
          <Link className="brand-pill" href="/" onClick={reloadArchive}>
            B.E.A
          </Link>
          <div className="topbar-actions">
            <nav className="topnav" aria-label="Archive sections">
              {categories.map((category) => (
                <a key={category.slug} href={`#${category.slug}`}>
                  {category.name}
                </a>
              ))}
            </nav>
            <button className="curator-trigger" type="button" onClick={() => setIsCuratorOpen(true)} aria-label="Open The Curator profile">
              <span className="curator-icon" aria-hidden="true" />
            </button>
          </div>
        </header>

        <section className="hero" aria-labelledby="archive-title">
          <div className="hero-animation" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-content">
            <p className="hero-quote" aria-live="polite">
              {heroQuotes[quoteIndex]}
            </p>
            <h1 id="archive-title">{archiveName}</h1>
            <p className="hero-tagline">{archiveTagline}</p>
            <p className="hero-summary">{archiveSummary}</p>
          </div>
        </section>

        <section className="archive-rows" aria-label="Featured archive collections">
          {categories.map((category) => (
            <CategoryRow key={category.slug} category={category} onSelect={setSelectedProfile} />
          ))}
        </section>
      </main>
      <CuratorModal isOpen={isCuratorOpen} onClose={() => setIsCuratorOpen(false)} />
      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </>
  );
}

function LoadingIntro({ state, onEnter }: { state: "waiting" | "exiting"; onEnter: () => void }) {
  return (
    <div className={`loading-intro loading-intro-${state}`} aria-label="Loading Black Excellence Archives">
      <div className="loading-mark">
        <span className="loading-logo">B.E.A</span>
        <span className="loading-name">Black Excellence Archives</span>
        <span className="loading-tagline">Black Vision. Black Brilliance. Black Legacy.</span>
      </div>
      <div className="loading-bar" aria-hidden="true">
        <span />
      </div>
      <button className="enter-archives" type="button" onClick={onEnter} disabled={state === "exiting"}>
        Enter Archives
      </button>
    </div>
  );
}

function CategoryRow({
  category,
  onSelect,
}: {
  category: ArchiveCategory;
  onSelect: (profile: Profile) => void;
}) {
  return (
    <section className="category-section" id={category.slug} aria-labelledby={`${category.slug}-title`}>
      <div className={`category-banner category-banner-${category.slug}`}>
        <Image src={category.image} alt="" fill sizes="100vw" />
        <div className="category-banner-shade" />
        <div className="category-banner-content">
          <div className="category-title-group">
            <p>Field</p>
            <h2 id={`${category.slug}-title`}>{category.name}</h2>
            <span>{category.summary}</span>
          </div>
          <Link className="category-collection-link" href={`/collection/${category.slug}`}>
            View The Collection
          </Link>
        </div>
      </div>
      <div className="shelf" data-carousel aria-label={`${category.name} subsections`}>
        {category.subcategories.map((subcategory) => (
          <SubcategorySpotlight
            key={subcategory.slug}
            category={category}
            subcategory={subcategory}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

function SubcategorySpotlight({
  category,
  subcategory,
  onSelect,
}: {
  category: ArchiveCategory;
  subcategory: Subcategory;
  onSelect: (profile: Profile) => void;
}) {
  const profile = useMemo(() => featuredProfile(category.slug, subcategory.slug), [category.slug, subcategory.slug]);

  if (!profile) {
    return null;
  }

  return (
    <article className="spotlight-card">
      <button className="spotlight-image" type="button" onClick={() => onSelect(profile)}>
        <PortraitFrames profile={profile} sizes="(max-width: 720px) 78vw, 280px" />
      </button>
      <div className="spotlight-copy">
        <p>{subcategory.name}</p>
        <h3>{profile.name}</h3>
        <span className="profile-lifespan">{profileLifespan(profile)}</span>
        <span>{profilePreview(profile)}</span>
        <div className="spotlight-actions">
          <button type="button" onClick={() => onSelect(profile)}>
            Open Bio
          </button>
        </div>
      </div>
    </article>
  );
}
