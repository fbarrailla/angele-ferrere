import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">

      {/* ══════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5">
        <span className="font-serif text-sm tracking-[0.2em] uppercase text-ink/40 select-none">
          A. Ferrere
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Distinction", "Projet", "Publication", "Biographie"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] tracking-[0.2em] uppercase text-ink/40 hover:text-terracotta transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>


      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-14 pt-28 pb-16 overflow-hidden">

        {/* Contact-sheet grid texture */}
        <div
          className="absolute inset-0 contact-grid pointer-events-none"
          style={{ opacity: 0.035 }}
        />

        {/* Thin vertical accent line */}
        <div
          className="absolute left-8 md:left-14 top-28 bottom-16 w-px bg-ink/10 rule-grow hidden lg:block"
          aria-hidden="true"
        />

        {/* Portrait — upper right */}
        <div className="absolute right-8 md:right-14 top-24 hidden md:block animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Image
            src="/hero.jpg"
            alt="Angèle Ferrere"
            width={1766}
            height={2322}
            className="w-[200px] lg:w-[260px] h-auto object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Name */}
        <div className="relative z-10 mb-10">
          <h1
            className="font-serif font-light leading-[0.85] tracking-tight text-ink"
            style={{ fontSize: "clamp(4.5rem, 17vw, 16rem)" }}
          >
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              Angèle
            </span>
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Ferrere
            </span>
          </h1>
        </div>

        {/* Subtitle row */}
        <div
          className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <p className="font-serif italic text-xl md:text-2xl text-ink/60 leading-snug">
            Historienne &amp; esthéticienne de la photographie
          </p>
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-terracotta font-medium">
              1ère Lauréate · Bourse Martine Franck
            </span>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-ink/10 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        />
      </section>


      {/* ══════════════════════════════════════════
          DISTINCTION
      ══════════════════════════════════════════ */}
      <section id="distinction" className="px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-5xl">

          <SectionLabel label="Distinction" />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10 lg:gap-20">

            {/* Date column */}
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-1 lg:pt-2">
              <div className="font-serif text-[3.5rem] font-light text-ink/15 leading-none tabular-nums">
                17
              </div>
              <div>
                <p className="font-serif italic text-base text-ink/35 mt-0.5">juin 2025</p>
                <p className="text-[10px] tracking-widest uppercase text-ink/25 mt-3 leading-relaxed">
                  Fondation<br />
                  Henri Cartier-Bresson<br />
                  Paris
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <blockquote className="font-serif font-light italic text-2xl md:text-[2rem] lg:text-[2.4rem] leading-[1.3] text-ink mb-8 max-w-2xl">
                &ldquo;&nbsp;désignée à l&rsquo;unanimité pour son projet
                consacré aux luttes sociales dans l&rsquo;œuvre de
                Martine Franck&nbsp;&rdquo;
              </blockquote>

              <p className="text-muted leading-relaxed text-[15px] md:text-base max-w-2xl mb-8">
                Suite aux délibérations qui se sont tenues le 17 juin 2025 à la Fondation Henri
                Cartier-Bresson à Paris, le jury de la première édition de la Bourse de recherche
                curatoriale Martine Franck a désigné à l&rsquo;unanimité Angèle Ferrere pour son
                projet consacré aux luttes sociales dans l&rsquo;œuvre de Martine Franck. Ce travail
                de recherche donnera lieu à une exposition à la Fondation Henri Cartier-Bresson à
                l&rsquo;automne 2026 et à une publication.
              </p>

              {/* Callout tag */}
              <div className="inline-flex items-center gap-2.5 bg-terracotta-light px-5 py-3">
                <span className="w-1 h-1 rounded-full bg-terracotta" />
                <span className="text-[11px] tracking-[0.18em] uppercase text-terracotta font-medium">
                  Exposition · Automne 2026 · Fondation Henri Cartier-Bresson
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />


      {/* ══════════════════════════════════════════
          PROJET
      ══════════════════════════════════════════ */}
      <section id="projet" className="px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-5xl">

          <SectionLabel label="Projet de Recherche" />

          <h2
            className="mt-10 font-serif font-light leading-[1.1] text-ink max-w-3xl"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            Les Luttes Sociales dans l&rsquo;Œuvre<br className="hidden md:block" /> de Martine Franck
          </h2>

          {/* Three pillars */}
          <div className="mt-16">
            {[
              {
                n: "01",
                title: "Photojournalisme & mobilisations collectives",
                text: "À partir d'un corpus de photographies réalisées en France et à l'étranger, l'exposition interrogera la représentation photographique des mobilisations collectives ainsi que la circulation de ces images, dans une perspective d'histoire sociale.",
              },
              {
                n: "02",
                title: "Militantisme féministe & presse engagée",
                text: "Une attention particulière sera portée aux actions militantes féministes et à la diffusion de ces images dans la presse féministe. L'exposition reviendra sur l'expérience collective de l'agence Viva, dont Martine Franck fut membre fondatrice, en replaçant son travail au cœur des débats sur le photojournalisme des années 1970.",
              },
              {
                n: "03",
                title: "Action humanitaire, vieillesse & dignité",
                text: "Le projet mettra en lumière les nombreux reportages que Martine Franck a consacrés aux associations et aux organisations humanitaires — notamment Les Petits Frères des Pauvres — soulignant son engagement durable auprès des plus vulnérables et son regard sensible porté sur la vieillesse, la dignité et la solidarité.",
              },
            ].map((pillar, i) => (
              <div key={pillar.n}>
                {i > 0 && (
                  <div className="h-px bg-ink/8 ml-0 md:ml-[5.5rem] my-10" />
                )}
                <div className="grid grid-cols-1 md:grid-cols-[4.5rem_1fr] gap-4 md:gap-8">
                  <div
                    className="font-serif font-light text-ink leading-none select-none"
                    style={{ fontSize: "3rem", opacity: 0.12 }}
                  >
                    {pillar.n}
                  </div>
                  <div>
                    <h3 className="font-serif italic text-xl text-ink mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-[15px] md:text-base max-w-xl">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />


      {/* ══════════════════════════════════════════
          PUBLICATION
      ══════════════════════════════════════════ */}
      <section id="publication" className="px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-5xl">

          <SectionLabel label="Publication" />

          <div className="mt-14 flex flex-col sm:flex-row gap-10 md:gap-16 items-start">

            {/* Book cover */}
            <a
              href="https://www.amazon.com/Esth%C3%A9tique-photographie-chantier-Fran%C3%A7ois-Soulages-ebook/dp/B0D9KKY61Q/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 group"
            >
              <Image
                src="/e-book.jpg"
                alt="Esthétique de la photographie de chantier"
                width={400}
                height={566}
                className="w-[160px] md:w-[200px] h-auto shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
            </a>

            {/* Book info */}
            <div className="pt-1">
              <p className="text-[10px] tracking-[0.25em] uppercase text-terracotta font-medium mb-3">
                E-book · L&rsquo;Harmattan
              </p>
              <h3 className="font-serif font-light text-2xl md:text-3xl text-ink leading-snug mb-2">
                Esthétique de la photographie de chantier
              </h3>
              <p className="font-serif italic text-base text-ink/50 mb-5">
                Sous la direction de François Soulages &amp; Angèle Ferrere
              </p>
              <p className="text-muted text-[15px] leading-relaxed max-w-md mb-8">
                Publié dans la Collection Eidos, Série Photographie aux éditions L&rsquo;Harmattan,
                cet ouvrage explore l&rsquo;esthétique de la photographie de chantier — un corpus
                photographique peu étudié, à la croisée de l&rsquo;histoire de l&rsquo;architecture,
                du travail et des représentations visuelles.
              </p>
              <a
                href="https://www.amazon.com/Esth%C3%A9tique-photographie-chantier-Fran%C3%A7ois-Soulages-ebook/dp/B0D9KKY61Q/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-terracotta-light px-5 py-3 hover:bg-terracotta hover:text-cream transition-colors duration-300 group"
              >
                <span className="w-1 h-1 rounded-full bg-terracotta group-hover:bg-cream transition-colors duration-300" />
                <span className="text-[11px] tracking-[0.18em] uppercase text-terracotta font-medium group-hover:text-cream transition-colors duration-300">
                  Disponible sur Amazon
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />


      {/* ══════════════════════════════════════════
          BIOGRAPHIE
      ══════════════════════════════════════════ */}
      <section id="biographie" className="px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-5xl">

          <SectionLabel label="Biographie" />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[260px_1fr_180px] gap-10 lg:gap-16">

            {/* Portrait */}
            <div className="shrink-0">
              <Image
                src="/picture.jpg"
                alt="Angèle Ferrere"
                width={740}
                height={555}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Main bio text */}
            <div className="space-y-5">
              <p className="text-muted leading-relaxed text-[15px] md:text-base">
                Angèle Ferrere est docteure en histoire et esthétique de la photographie,
                actuellement ATER à l&rsquo;université de Lorraine. Après une thèse sur la
                photographie de chantier, elle a été lauréate de la Bourse de recherche Fondation
                Louis Roederer 2021 pour la photographie puis d&rsquo;une bourse postdoctorale de
                l&rsquo;Université Paris 8 pour une recherche portant sur les espaces urbains et
                périurbains dans l&rsquo;objectif des femmes photographes en France dans les 1970–1990.
              </p>
              <p className="text-muted leading-relaxed text-[15px] md:text-base">
                Elle travaille également sur les photographies diffusées dans la presse féministe
                française de cette même période et sur les archives visuelles lesbiennes. Elle a
                publié plusieurs articles dans les revues{" "}
                <em className="font-serif italic text-ink">Marges</em>,{" "}
                <em className="font-serif italic text-ink">Transbordeur</em> et{" "}
                <em className="font-serif italic text-ink">Focales</em>.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-7">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-3">
                  Publications
                </p>
                <ul className="space-y-1.5">
                  {["Marges", "Transbordeur", "Focales"].map((pub) => (
                    <li key={pub} className="font-serif italic text-[15px] text-ink/60">
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-ink/10" />

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-3">
                  Distinctions
                </p>
                <ul className="space-y-3">
                  {[
                    { award: "Bourse Martine Franck", year: "2025" },
                    { award: "Bourse Louis Roederer", year: "2021" },
                    { award: "Bourse postdoctorale", year: "Paris 8" },
                  ].map((item) => (
                    <li key={item.award}>
                      <p className="text-[13px] text-ink/70 leading-tight">{item.award}</p>
                      <p className="text-[11px] text-ink/35 mt-0.5">{item.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="px-8 md:px-14 py-10 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="font-serif italic text-ink/35 text-sm">
          Angèle Ferrere
        </span>
        <div className="flex flex-col gap-2 text-left sm:text-right">
          <p className="text-[11px] text-ink/30 tracking-wide max-w-xs leading-relaxed">
            La Bourse de recherche curatoriale Martine Franck bénéficie du soutien de la
            Fondation d&rsquo;entreprise Linklaters.
          </p>
          <p className="text-[11px] text-ink/25">
            Created with ❤️ by{" "}
            <a
              href="https://tontonfrancky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors duration-200"
            >
              Francky
            </a>
          </p>
        </div>
      </footer>

    </div>
  );
}


/* ── Shared sub-components ── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] tracking-[0.25em] uppercase text-terracotta font-medium">
        {label}
      </span>
      <div className="h-px bg-ink/12 w-16" />
    </div>
  );
}

function Divider() {
  return <div className="mx-8 md:mx-14 h-px bg-ink/10" />;
}
