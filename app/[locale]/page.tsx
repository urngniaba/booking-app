// app/[locale]/page.tsx

import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Connection from "@/components/Connection";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>
        <Link href="/about">{t("about")}</Link>
      </h2>
      <h2>
        <Link href="/contact">{t("contact")}</Link>
      </h2>
      <Connection />
    </div>
  );
}
