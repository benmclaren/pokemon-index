import Algolia from "@/components/products/algolia"
import { LanguageProvider } from '../components/LanguageState';
import Nav from "@/components/navbar";
export default function Home() {
  return (
    <main>
      <LanguageProvider>
        <Nav />
        <Algolia />
      </LanguageProvider>
    </main>
  );
}
