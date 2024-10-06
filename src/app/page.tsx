import { ProductResults } from "@/components/ProductResults";
import { SearchForm } from "../components/SearchForm";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="container mx-auto px-4 responsive-padding py-8">
      <SearchForm />
      <Separator className="my-6" />
      <ProductResults />
    </main>
  );
}
