import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @format textarea
   */
  description?: string;
  /**
   * @format color-input
   */
  highlightColor?: string;
  image?: ImageWidget;
  /**
   * @format textarea
   */
  buttonText?: string;
}

export default function HeroLeadfy({
  title = "Nós trazemos os clientes, você vende mais",
  subtitle = "Automatize a geração de leads qualificados para o seu negócio",
  description = "",
  highlightColor = "#c6f551",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  buttonText = "Fale com Especialista"
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title.split(" ").map((word, index) => (
            <span key={index} className={word === "vende" ? `text-[${highlightColor}]` : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-xl mb-6">{subtitle}</p>
        {description && <p className="mb-6">{description}</p>}
        <button className="btn bg-[#c6f551] text-black hover:bg-[#b3e048] border-none">
          {buttonText}
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={image} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}