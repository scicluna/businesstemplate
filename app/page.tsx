import MissionStatement from "@/components/Mission"
import News from "@/components/News"
import ProductDisplay from "@/components/ProductDisplay"

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <MissionStatement />
      <ProductDisplay />
      <News />
    </main>
  )
}
