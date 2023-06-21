import MissionStatement from "@/components/Mission"
import ProductDisplay from "@/components/ProductDisplay"

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <MissionStatement />
      <ProductDisplay />
    </main>
  )
}
