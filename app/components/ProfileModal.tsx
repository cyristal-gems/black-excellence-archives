"use client";

import Image from "next/image";
import { useEffect } from "react";
import { buildBio, type Profile } from "../data";

type ProfileModalProps = {
  profile: Profile | null;
  onClose: () => void;
};

export function ProfileModal({ profile, onClose }: ProfileModalProps) {
  useEffect(() => {
    if (!profile) {
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
  }, [onClose, profile]);

  if (!profile) {
    return null;
  }

  return (
    <div className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profile-title">
      <button className="modal-scrim" type="button" aria-label="Close profile" onClick={onClose} />
      <article className="profile-panel">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close profile">
          x
        </button>
        <div className="profile-portrait-gallery">
          {profile.images.map((image, index) => (
            <div className="profile-portrait" key={image}>
              <Image
                src={image}
                alt={index === 0 ? profile.name : `${profile.name} alternate portrait`}
                fill
                sizes="(max-width: 800px) 100vw, 420px"
                priority={index === 0}
                unoptimized
              />
            </div>
          ))}
        </div>
        <div className="profile-copy">
          <p className="profile-kicker">Bio</p>
          <h2 id="profile-title">{profile.name}</h2>
          <div className="bio-copy">
            {buildBio(profile).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
