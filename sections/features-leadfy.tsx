import { ImageWidget } from "apps/admin/widgets.ts";

interface Feature {
  icon: ImageWidget;
  title: string;
  description: string;
}

interface Props {
  /**
   * @format rich-text
   */
  mainTitle?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @format color-input
   */
  highlightColor?: string;
  features?: Feature[];
  /**
   * @format textarea
   */
  buttonText?: string;
  /**
   * @description The URL to redirect when the button is clicked
   */
  buttonHref?: string;
}

export default function FeaturesLeadfy({
  mainTitle = "Foque no que realmente importa: suas vendas",
  subtitle = "A Leadfy traz os melhores leads e aumenta sua visibilidade no mercado.",
  highlightColor = "#c6f551",
  features = [
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Economize tempo e trabalho",
      description: "Atualizamos seus anúncios com seu estoque em tempo real"
    },
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Otimize seus resultados",
      description: "Melhoramos a performance das suas campanhas de aquisição e remarketing"
    },
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Seja mais competitivo",
      description: "Traga as estratégias dos grandes portais para o site do seu negócio"
    },
    {
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Venda fora do horário comercial",
      description: "Nosso módulo de atendimento 24×7 não deixa você perder nenhum cliente"
    }
  ],
  buttonText = "Fale com Especialista",
  buttonHref = "#"
}: Props) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{mainTitle}</h2>
        <p className="text-xl text-center mb-12">
          {subtitle.split(" ").map((word, index) => (
            <span key={index} className={word === "Leadfy" ? `text-[${highlightColor}]` : ""}>
              {word}{" "}
            </span>
          ))}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <div className="w-12 h-1 bg-[#c6f551] mb-4"></div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={buttonHref} className="btn bg-[#c6f551] text-black hover:bg-[#b3e048] border-none px-8 py-3 text-lg font-semibold inline-block">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}