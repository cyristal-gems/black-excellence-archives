"use client";

import Image from "next/image";
import { useEffect } from "react";
import { curatorProfile } from "../data";

type CuratorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CuratorModal({ isOpen, onClose }: CuratorModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="curator-title">
      <button className="modal-scrim" type="button" aria-label="Close curator profile" onClick={onClose} />
      <article className="curator-panel">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close curator profile">
          x
        </button>
        <div className="curator-portrait">
          <Image src={curatorProfile.image} alt={curatorProfile.name} fill sizes="(max-width: 800px) 100vw, 360px" priority />
        </div>
        <div className="curator-copy">
          <h2 id="curator-title">{curatorProfile.title}</h2>
          <p className="curator-name">{curatorProfile.name}</p>
          <div className="bio-copy">
            {curatorProfile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="curator-socials" aria-label="Curator links">
            {curatorProfile.links.map((link) => (
              <a
                key={link.url}
                className={`curator-social-link curator-social-${link.icon}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <Image src={link.image} alt="" width={28} height={28} unoptimized />
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
