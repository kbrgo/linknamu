import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-4 py-12 sm:py-16">
      <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      <ul className="mt-8 flex w-full flex-col gap-5">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
