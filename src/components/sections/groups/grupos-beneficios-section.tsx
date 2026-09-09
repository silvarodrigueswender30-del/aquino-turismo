const beneficios = [
  {
    title: "Cidade e estado de origem",
    body: "Ajuda a entender como o grupo chegará a Paraty.",
  },
  {
    title: "Datas de chegada e saída",
    body: "A disponibilidade dos serviços depende do período da viagem.",
  },
  {
    title: "Quantidade de passageiros",
    body: "O tamanho do grupo orienta as opções de passeios e hospedagem.",
  },
  {
    title: "Serviços de interesse",
    body: "Informe se procura jipe, escuna, lancha, hospedagem ou roteiro integrado.",
  },
  {
    title: "Perfil do grupo",
    body: "Agência, guia, excursão, terceira idade, empresa, grupo religioso, família ou amigos.",
  },
  {
    title: "Responsável pelo contato",
    body: "Centralize o atendimento com a agência, guia ou organizador da viagem.",
  },
];

export function GruposBeneficiosSection() {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PLANEJAMENTO B2B
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
            O que precisamos saber sobre sua excursão
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 border-t-2 border-golden-sand/30 pt-6">
              <h3 className="font-heading font-medium text-ocean-navy text-xl">
                {item.title}
              </h3>
              <p className="font-sans text-slate-blue text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
