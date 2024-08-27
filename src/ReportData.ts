export interface ReportProps {
  description: string;
  subDescription: string;
  reportData: ReportDataProps[];
}

export interface ReportDataProps {
  title: string;
  description: string;
  index?: number;
}

export const ReportData: ReportProps = {
  description:
    "In dit afval rapport vindt u een overzicht van alle afvalstromen, de bijbehorende hoeveelheden afval en de gebruikte verwerkingsmethodes. Daarnaast wordt aangegeven wie het afval heeft verwerkt en welke materialen er in het afval aanwezig zijn.",
  subDescription: "Inhoudsopgave",
  reportData: [
    {
      title: "Verwerkingsmethodes",
      description:
        "In het onderstaande overzicht en tabel vindt u de toegepaste verwerkingsmethoden voor uw afval, inclusief de classificatie als gevaarlijk of niet-gevaarlijk afval. De tabel biedt een gedetailleerd overzicht van specifieke verwerkingsmethoden en welke afvalstromen volgens deze wijze zijn verwerkt.",
    },
    {
      title: "Afvalstromen",
      description:
        "In de onderstaande tabel vindt u een overzicht van het door u geproduceerde afval, gekenmerkt door een unieke zescijferige code, bekend als de EURAL-code. Per afvalcategorie wordt aangegeven hoeveel ton afval is gegenereerd.",
    },
    {
      title: "Verwerkers",
      description:
        "Dit overzicht biedt een samenvatting van alle verwerkers die betrokken zijn geweest bij de verwerking van uw afval, gerangschikt naar de hoeveelheid afval die zij hebben verwerkt.",
    },
    {
      title: "Materialen",
      description:
        "Dit overzicht en de bijbehorende tabel geven aan welke materialen aanwezig zijn in uw afval. In de sankey-diagram ziet u de hiërarchie van het materiaal, terwijl de tabel gedetailleerde informatie biedt over de hoeveelheden en of het materiaal als gevaarlijk wordt geclassificeerd. Materialen zijn afkomstig uit twee hoofdbronnen: levende (biotische) bronnen zoals planten en dieren, en niet-levende (abiotische) bronnen zoals stenen en mineralen. Biotische materialen zijn snel vervangbaar, terwijl abiotische materialen dat niet zijn. Verder kunnen materialen worden onderverdeeld in organische, hoofdzakelijk bestaande uit koolstofverbindingen, en anorganische. Organische materialen, zoals koolhydraten in aardappelen en fossiele brandstoffen, worden geproduceerd door levende organismen en kunnen natuurlijk afbreken. Anorganische materialen, zoals steen en metaal, vernieuwen zich langzaam en worden beschouwd als niet-hernieuwbaar.",
    },
  ],
};
