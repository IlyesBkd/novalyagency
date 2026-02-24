import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | Lime 77",
  description: "Politique de confidentialité du site Lime 77",
};

export default function PolitiqueConfidentialite() {
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
          Politique de confidentialité
        </h1>

        <div className="space-y-8 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              La présente politique de confidentialité a pour but d&apos;informer les utilisateurs du site <strong className="text-white">lime77.fr</strong> sur la manière dont leurs données personnelles sont collectées, traitées et protégées, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est :<br />
              <strong className="text-white">Lime 77</strong><br />
              E-mail : contact@lime77.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Données collectées</h2>
            <p>
              Lors de l&apos;utilisation du formulaire de contact, nous collectons les données suivantes :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom complet</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Description du projet</li>
              <li>Formule choisie (One Shot / Abonnement / Autre)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Finalité du traitement</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Répondre à votre demande de contact</li>
              <li>Vous fournir un devis ou des informations sur nos services</li>
              <li>Assurer le suivi de la relation commerciale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Base légale</h2>
            <p>
              Le traitement des données est fondé sur votre consentement, donné lors de la soumission du formulaire de contact. Vous pouvez retirer votre consentement à tout moment en nous contactant.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées pour une durée maximale de 3 ans à compter du dernier contact. Passé ce délai, elles sont supprimées de nos systèmes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Destinataires des données</h2>
            <p>
              Vos données ne sont en aucun cas vendues ni cédées à des tiers. Elles sont uniquement accessibles par l&apos;équipe de Lime 77, dans le cadre strict du traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données : chiffrement SSL/TLS, accès restreint à la base de données, hébergement sécurisé.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white">Droit d&apos;accès :</strong> obtenir la confirmation du traitement de vos données et en recevoir une copie.</li>
              <li><strong className="text-white">Droit de rectification :</strong> demander la correction de données inexactes.</li>
              <li><strong className="text-white">Droit à l&apos;effacement :</strong> demander la suppression de vos données.</li>
              <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré.</li>
              <li><strong className="text-white">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@lime77.fr" className="text-accent-lime hover:underline">contact@lime77.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de suivi ni de cookies publicitaires. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Modification de la politique</h2>
            <p>
              Lime 77 se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Nous vous invitons à la consulter régulièrement.
            </p>
          </section>

          <section>
            <p className="text-text-secondary/60 text-xs mt-8">
              Dernière mise à jour : février 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
