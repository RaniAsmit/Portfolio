export default function Head() {
  return (
    <>
      <title>Rani Asmit | Software Developer</title>
      <meta
        name="description"
        content="Portfolio of Rani Asmit, Engineer by title, problem-solver by heart – building intuitive apps with Flutter and Java."
      />
      <meta
        name="keywords"
        content="Rani Asmit, full stack developer, software engineer, Flutter developer, Java Spring Boot, scalable backend, MongoDB, frontend developer"
      />
      <meta name="author" content="Rani Asmit" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://raniasmit.me" />
      <meta property="og:title" content="Rani Asmit| Developer Portfolio" />
      <meta
        property="og:description"
        content="Explore projects, blog posts, and open-source work by Rani Asmit."
      />
      <meta property="og:image" content="https://vatsa.works/logo.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://raniasmit.me" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Rani Asmit| Developer Portfolio" />
      <meta name="twitter:description" content="Explore the work and writings of Rani Asmit." />
      {/* <meta name="twitter:image" content="https://vatsa.works/twitter_profile_image.png" /> */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rani Asmit",
            "jobTitle": "Software Developer",
            "url": "https://raniasmit.me",
            "sameAs": [
              "https://www.linkedin.com/in/raniasmit//",
              "https://github.com/RaniAsmit",
              "https://x.com/RaniAsmit"
            ],
            // "worksFor": {
            //   "@type": "Organization",
            //   "name": "NextGen Scale",
            //   "url": "https://nextgenscale.com"
            // },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "KIET Group of Institutions, Delhi NCR"
            }
          })
        }}
      />
    </>
  );
}