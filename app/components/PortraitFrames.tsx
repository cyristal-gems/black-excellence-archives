import Image from "next/image";
import type { Profile } from "../data";

type PortraitFramesProps = {
  profile: Profile;
  priority?: boolean;
  sizes: string;
};

export function PortraitFrames({ profile, priority = false, sizes }: PortraitFramesProps) {
  return (
    <>
      {profile.images.slice(0, 2).map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={index === 0 ? profile.name : `${profile.name} alternate portrait`}
          fill
          sizes={sizes}
          priority={priority && index === 0}
          unoptimized
          className={`portrait-frame portrait-frame-${index + 1}`}
        />
      ))}
    </>
  );
}
