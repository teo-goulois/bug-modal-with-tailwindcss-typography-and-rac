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
  const fakePromise = new Promise((resolve) => {
    setTimeout(() => {
      const contente = `
      <h1>⚔️ L&rsquo;Irr&eacute;ductible Festival 2026 &agrave; Quimper</h1>
<p>Hey toi ! Pr&ecirc;t&middot;e &agrave; vivre une exp&eacute;rience unique du <strong>26 au 28 juin 2026</strong>&nbsp;&agrave; <strong>Quimper</strong>, au <strong>Chemin de K&eacute;rourien</strong> ? Trois jours de musique, de fun et d&rsquo;ambiance bretonne d&eacute;jant&eacute;e t&rsquo;attendent dans un cadre convivial et chaleureux 🏰🎶.</p>
<h2>📅 Les infos cl&eacute;s</h2>
<ul>
<li><strong>Quand &amp; o&ugrave; ?</strong> Du <strong>26 au 28 juin 2026</strong>&nbsp;&agrave; Quimper, au Chemin de K&eacute;rourien 📍</li>
<li><strong>Ambiance</strong> : festival &agrave; taille humaine, esprit village gaulois, convivial et fun &agrave; souhait 🎉⚔️</li>
<li><strong>Camping</strong>&nbsp;: <strong>gratuit</strong> et r&eacute;serv&eacute; aux festivaliers ⛺💚</li>
<li style="font-weight: bold;"><strong>Parking v&eacute;hicule am&eacute;nag&eacute; gratuit !</strong></li>
</ul>
<h2>⏰ Horaires &amp; acc&egrave;s pratiques</h2>
<ul>
<li>Festival ouvert tous les jours, avec une programmation qui d&eacute;chire de jour comme de nuit 🌞🌙</li>
<li>Bonus chapiteau &eacute;lectro avec un d&eacute;cor de folie pour te faire danser non-stop de 21h &agrave; 3h 🎧🕺💃</li>
</ul>
<h2>Pourquoi tu dois y &ecirc;tre ?</h2>
<ol>
<li><strong>Ambiance Gauloise &amp; bretonne</strong> : d&eacute;connexion totale et bonne humeur garantie ⚔️😄</li>
<li><strong>Prog&rsquo; vari&eacute;e</strong> : &eacute;lectro, swing, rap, rock, folk&hellip; il y en a pour tous les go&ucirc;ts 🎸🎷🎤</li>
<li><strong>Festival &agrave; taille humaine</strong> : convivialit&eacute; et partage avant tout 👥🤝</li>
<li><strong>Camping gratuit</strong> : pour vivre l&rsquo;exp&eacute;rience compl&egrave;te sans stress ⛺💚</li>
</ol>
<h3>Tu veux un aper&ccedil;u ? Regardes l'<a href="https://www.irreductible-festival.fr/" target="_blank" rel="noopener"><strong>aftermovie de l'&eacute;dition 2025</strong></a> !</h3>
<p><!-- notionvc: b5e1d34c-c396-497b-8090-025607c1e447 --></p>
`;

      resolve(contente);
    }, 1000);
  });
  const content = (await fakePromise) as string;
  return (
    <div>
      <p>page-05-with-html-and-prose-and-async</p>
      <div
        className="prose prose-sm"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
