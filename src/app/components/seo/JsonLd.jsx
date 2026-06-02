const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo Anes",
  alternateName: "hfa",
  url: "https://www.hfanes.com/",
  image: "https://www.hfanes.com/images/hfa_open.png",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/Hfanes",
    "https://www.linkedin.com/in/hugofanes/",
    "https://x.com/hfa_dev",
  ],
  knowsAbout: [
    "JavaScript",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    ".NET",
    "PostgreSQL",
    "Full-stack development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "hfa Portfolio",
  url: "https://www.hfanes.com/",
  description:
    "Portfolio website for Hugo Anes, a full-stack developer specializing in modern JavaScript, Java, backend APIs, and responsive web applications.",
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema]),
      }}
    />
  );
}
