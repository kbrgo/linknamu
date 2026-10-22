type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-36 w-36 items-center justify-center rounded-full bg-emerald-100 text-5xl font-semibold text-emerald-700 sm:h-40 sm:w-40"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-neutral-500">{bio}</p>
    </header>
  );
}
