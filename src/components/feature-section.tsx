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
          ? "flex-col gap-12"
          : "flex-col-reverse gap-12 lg:gap-32 lg:flex-row",
        isInverted
          ? direction === "row"
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col-reverse"
          : "",
      )}
    >
      <div
        className={`text-content ${shouldCentralizeText ? "text-center" : ""} flex flex-col gap-4`}
      >
        <h2 className="text-4xl">{title}</h2>
        <p>{description}</p>
      </div>
      <img
        className={cn(
          "h-[300px] w-auto rounded-lg",
          imageWithShadow && "shadow-lg",
        )}
        src={image}
        alt={title}
      />
    </div>
  );
};
