export const site = {
  name: "Veyra Interactive",
  title: "Veyra Interactive — Worlds worth getting lost in",
  description:
    "Independent minds. Unforgettable games. Veyra Interactive is a gaming studio and publisher concept creating worlds worth getting lost in.",
  repository: "https://github.com/LunaNezha/gc-capital-framer",
  author: {
    name: "Luna Nezha",
    portfolio: "https://lunanezha.com/",
    linkedin: "https://www.linkedin.com/in/luna-nezha/",
  },
  socialImage: {
    url: "/brand/social-card.png",
    width: 1200,
    height: 630,
    alt: "Veyra Interactive — Worlds worth getting lost in",
    type: "image/png",
  },
};

export function getContactEmail(): string | undefined {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return email && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)
    ? email
    : undefined;
}
