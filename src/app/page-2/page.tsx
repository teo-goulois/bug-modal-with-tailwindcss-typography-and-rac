import { Metadata } from "next";

export const metadata: Metadata = {
  title: "title",
  description: "description",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <p>My Async Page 2</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: `
          <h3 data-olk-copy-source="MessageBody">🎂 Birthday Party &ndash; Samedi 27 septembre 🥳</h3>
<div>&Ccedil;a y est&hellip; Vertical'Art souffle sa premi&egrave;re bougie ! 🥲</div>
<div>Et franchement, impossible de ne pas marquer le coup.</div>
<div>Ils ont donc pr&eacute;par&eacute; un menu sportif &amp; festif 🤩</div>
<div>📍 RDV d&egrave;s 15h00 pour :</div>
<ul>
<li>🧗 Mini contest et challenges en &eacute;quipe.</li>
<li>🎶 Concert de Swansea : parce qu&rsquo;apr&egrave;s grimper, on danse.</li>
<li>🎟 Tombola : des cadeaux &agrave; gogo.</li>
<li>🔥 BBQ + dessert surprise (oui, vous allez aimer).</li>
</ul>
<p>Ils comptent sur vous pour venir vous d&eacute;fouler, vous r&eacute;galer et rigoler !</p>
<p data-start="55" data-end="305"><strong>Vertical'Art </strong>est un lieu de vie centr&eacute; autour de l'<strong data-start="113" data-end="125">escalade</strong> 🧗&zwj;♂️ : <strong data-start="134" data-end="144">1000m&sup2;</strong> de blocs adapt&eacute;s &agrave; tous, sur des murs aux profils vari&eacute;s et atypiques, ainsi qu'un espace <strong data-start="250" data-end="277">renforcement musculaire</strong> 💪 et un <strong data-start="287" data-end="296">sauna</strong> 🧖&zwj;♀️.</p>
<p data-start="55" data-end="305">Pour prolonger le plaisir, un&nbsp;<strong data-start="340" data-end="354">restaurant</strong> &agrave; la d&eacute;coration chaleureuse, bas&eacute; sur une cuisine <strong data-start="414" data-end="424">maison</strong>, <strong data-start="429" data-end="439">locale</strong> et <strong data-start="446" data-end="459">de saison</strong> 🌸🍂.</p>
<p data-start="469" data-end="560">Enfin, une <strong data-start="480" data-end="490">&eacute;quipe</strong> pr&ecirc;te &agrave; vous accueillir avec <strong data-start="523" data-end="531">joie</strong> 😄 et <strong data-start="538" data-end="554">bonne humeur</strong> 🌞.</p>
`,
        }}
      />
    </div>
  );
}
