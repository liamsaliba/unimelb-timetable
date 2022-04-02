import { CompassOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

export interface SelectItem {
  value: string;
  label: string | React.ReactNode;
}

export interface OptionItemProps {
  value: string;
  label?: string;
  secondaryLabel: string;
  children?: React.ReactNode;
}

export const OptionLabel = ({
  label,
  secondaryLabel,
  children,
}: {
  label: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
}) => (
  <div className="demo-option-label-item">
    {label}{" "}
    <span
      style={{
        textTransform: "uppercase",
        fontSize: "0.8em",
        color: "gray",
      }}
    >
      {secondaryLabel || ""}
    </span>
    {children}
  </div>
);

export const OptionItem = ({
  value,
  label = value,
  secondaryLabel,
  children,
}: OptionItemProps) =>
  ({
    value,
    label: (
      <OptionLabel label={label} secondaryLabel={secondaryLabel}>
        {children}
      </OptionLabel>
    ),
  } as SelectItem);

// <iframe width="600" height="420" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
// src = "https://use.mazemap.com/#v=1&config=unimelb&center=144.727122,-37.502705&zoom=7.8&utm_medium=iframe&search=" style = "border: 1px solid grey" allow = "geolocation" ></iframe ><br/><small><a href="https://www.mazemap.com/">Map by MazeMap</a></small>

export const MapButton = ({ location }: { location: string }) => (
  <Tooltip title="Show on map">
    <Button
      type="link"
      icon={<CompassOutlined />}
      target="_blank"
      href={`https://use.mazemap.com/#v=1&config=unimelb&center=144.727122,-37.502705&zoom=7.8&search=${location}`}
    />
  </Tooltip>
);

export const Location = ({
  location,
  showMap = false,
}: {
  location: string;
  showMap?: boolean;
}) => {
  const items = location.split("-");
  if (items.length == 1) {
    return OptionLabel({ label: location });
  }
  // join the rest of the items with a comma
  return OptionLabel({
    label: items.slice(1).reverse().join(", "),
    secondaryLabel: items[0],
    children: showMap ? <MapButton location={location} /> : undefined,
  });
};
