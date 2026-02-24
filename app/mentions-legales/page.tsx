import Link from "next/link";

export const metadata = {
  title: "Mentions légales | Novaly Agency",
  description: "Mentions légales du site Novaly Agency",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent-lime hover:underline text-sm mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Mentions légales
        </h1>

        <div className="space-y-8 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong className="text-white">novalyagency.com</strong> est édité par :<br />
              <strong className="text-white">Novaly Agency</strong><br />
              Statut : Micro-entreprise<br />
              Adresse : [Adresse à compléter]<br />
              E-mail : support@novalyagency.com<br />
              Téléphone : [Numéro à compléter]<br />
              SIRET : [Numéro SIRET à compléter]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est [Nom du responsable à compléter], en qualité de gérant.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Hébergeur</h2>
            <p>
              Le site est hébergé par :<br />
              <strong className="text-white">Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent-lime hover:underline">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de Novaly Agency, sauf mentions contraires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Novaly Agency.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Limitation de responsabilité</h2>
            <p>
              Novaly Agency s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Novaly Agency ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition. En conséquence, Novaly Agency décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites internet. Novaly Agency n&apos;exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, compétence est attribuée aux tribunaux français.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
