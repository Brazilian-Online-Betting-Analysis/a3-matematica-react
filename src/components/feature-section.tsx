type FeatureSectionProps = {
  id: string;
  direction: "row" | "column";
  isInverted?: boolean;
  title: string;
  description: string;
  image: string;
  shouldCentralizeText?: boolean;
};

export const FeatureSection = ({
  id,
  direction,
  isInverted,
  title,
  description,
  image,
  shouldCentralizeText = false,
}: FeatureSectionProps) => {
  return (
    <div
      id={id}
      className={`flex items-center justify-between ${
        direction === "column"
          ? "flex-col gap-12"
          : "flex-col gap-12 md:gap-32 md:flex-row"
      } ${isInverted ? (direction === "row" ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse") : ""}`}
    >
      <div
        className={`text-content ${shouldCentralizeText ? "text-center" : ""} flex flex-col gap-4`}
      >
        <h2 className="text-4xl">{title}</h2>
        <p>{description}</p>
      </div>
      <img className="h-[300px] w-auto" src={image} alt={title} />
    </div>
  );
};
