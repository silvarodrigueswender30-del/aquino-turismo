import Link from "next/link"
import { BedDouble, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { rooms } from "@/data/rooms"

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
})

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_48%,#FFFFFF_100%)] py-16 md:py-24">
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
            Acomodacoes
          </p>
          <h1 className="mt-3 font-heading text-4xl font-light text-slate-950 md:text-6xl">
            Quartos para descansar em Ubatuba
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Escolha uma acomodacao da pousada e fale com a equipe para consultar disponibilidade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <Card key={room.slug} className="group overflow-hidden border-[#063A45]/10 bg-white shadow-lg shadow-[#063A45]/5">
              <Link href={`/quartos/${room.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB8D9]">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#063A45] shadow-sm">
                    {currencyFormatter.format(room.pricePerNight)} / noite
                  </div>
                </div>
              </Link>

              <div className="space-y-4 p-5">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-slate-950">
                    {room.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 text-[#0C6478]" />
                    <span>{room.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#0C6478]" />
                    Ate {room.capacity}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BedDouble className="h-4 w-4 text-[#0C6478]" />
                    Pousada
                  </span>
                </div>

                <Button asChild className="w-full rounded-full bg-[#094F5F] text-white hover:bg-[#0C6478]">
                  <Link href={`/quartos/${room.slug}`}>Ver Quarto</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
