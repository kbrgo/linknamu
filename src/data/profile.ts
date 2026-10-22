export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl?: string;
  links: LinkItem[];
};

// TODO: 실제 프로필과 링크로 바꾸세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "blog", title: "블로그", url: "https://blog.naver.com" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  ],
};
