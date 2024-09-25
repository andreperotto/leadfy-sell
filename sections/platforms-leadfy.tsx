import { ImageWidget } from 'apps/admin/widgets.ts';

interface Platform {
  name: string;
  icon: ImageWidget;
}

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
   * @format color-input
   */
  highlightColor?: string;
  platforms?: Platform[];
}

export default function PlatformsLeadfy({
  title = "Anuncie seu estoque 24 horas por dia, 7 dias por semana",
  subtitle = "A Leadfy conecta seu negócio com as principais mídias digitais do planeta.",
  highlightColor = "#c6f551",
  platforms = [
    { name: "Tiktok", icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" },
    { name: "Facebook", icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" },
    { name: "Instagram", icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" },
    { name: "Google", icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e" }
  ]
}: Props) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-12">
          {subtitle.split(" ").map((word, index) => (
            <span key={index} className={word === "Leadfy" ? `text-[${highlightColor}]` : ""}>
              {word}{" "}
            </span>
          ))}
        </p>
        <div className="flex justify-center items-center space-x-8">
          {platforms.map((platform, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-2">
                <img src={platform.icon} alt={platform.name} className="w-10 h-10" />
              </div>
              <p className="text-sm">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}