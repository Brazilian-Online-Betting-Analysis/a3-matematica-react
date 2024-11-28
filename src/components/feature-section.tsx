import { cn } from "@/lib/utils";

type FeatureSectionProps = {
  id: string;
  direction: "row" | "column";
  isInverted?: boolean;
  title: string;
  description: string;
  image: string;
  shouldCentralizeText?: boolean;
  imageWithShadow?: boolean;
};

export const FeatureSection = ({
  id,
  direction,
  isInverted,
  title,
  description,
  image,
  shouldCentralizeText = false,
  imageWithShadow = false,
}: FeatureSectionProps) => {
  return (
    <div
      id={id}
      className={cn(
        "flex items-center justify-between relative z-10",
        direction === "column"
          ? "flex-col gap-8 md:gap-12"
          : "flex-col-reverse gap-8 md:gap-12 lg:gap-32 lg:flex-row",
        isInverted
          ? direction === "row"
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col-reverse"
          : "",
      )}
    >
      <div
        className={cn(
          "text-content flex flex-col gap-3 md:gap-4",
          shouldCentralizeText && "text-center",
        )}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-base sm:text-lg">{description}</p>
      </div>
      <img
        className={cn(
          "h-[200px] sm:h-[250px] md:h-[300px] w-auto rounded-lg object-cover",
          imageWithShadow && "shadow-lg",
        )}
        src={image}
        alt={title}
      />
    </div>
  );
};
