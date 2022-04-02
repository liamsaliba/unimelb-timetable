export interface SelectItem {
  value: string;
  label: string | React.ReactNode;
}

export interface OptionItemProps {
  value: string;
  label?: string;
  secondaryLabel: string;
}

export const OptionLabel = ({
  label,
  secondaryLabel,
}: {
  label: string;
  secondaryLabel?: string;
}) => (
  <div className="demo-option-label-item">
    {label}
    <span
      style={{
        paddingLeft: "0.4em",
        textTransform: "uppercase",
        fontSize: "0.8em",
        color: "gray",
      }}
    >
      {secondaryLabel || ""}
    </span>
  </div>
);

export const OptionItem = ({
  value,
  label = value,
  secondaryLabel,
}: OptionItemProps) =>
  ({
    value,
    label: <OptionLabel label={label} secondaryLabel={secondaryLabel} />,
  } as SelectItem);

export const Location = ({ location }: { location: string }) => {
  const items = location.split("-");
  if (items.length == 1) {
    return OptionLabel({ label: location });
  }
  // join the rest of the items with a comma
  return OptionLabel({
    label: items.slice(1).reverse().join(", "),
    secondaryLabel: items[0],
  });
};
