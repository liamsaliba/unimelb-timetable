import { AutoComplete } from "antd";
import { useMemo } from "react";

import { Timetable } from "../lib/timetable";

interface SelectItem {
  value: string;
  label: React.ReactNode | string;
}

const getAutofillItems = (data: Timetable): SelectItem[] => {
  const getUnique = (selector: (Event) => string) => [
    ...new Set<string>(data.map(selector)),
  ];

  const makeItems = (selector: (Event) => string, decorator: string) =>
    getUnique(selector).map((item) => ({
      value: item,
      label: (
        <div className="demo-option-label-item">
          {item}
          <span
            style={{
              paddingLeft: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8em",
              color: "gray",
            }}
          >
            {decorator}
          </span>
        </div>
      ),
    }));

  return [
    ...makeItems((e) => e.location, "Room"),
    ...makeItems((e) => e.subj_code, "Subj"),
    ...makeItems((e) => e.subj_name, "Subj"),
  ];
};

const Search = ({
  data,
  onChange,
}: {
  data: Timetable;
  onChange: (value: string) => void;
}) => {
  const options = useMemo(() => getAutofillItems(data), data);

  return (
    <AutoComplete
      allowClear
      style={{ width: "100%" }}
      showSearch
      placeholder="Search (room, subject code, name)"
      optionFilterProp="label"
      options={options}
      onChange={onChange}
      filterOption={(input, option) =>
        option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.value.toLowerCase().localeCompare(optionB.value.toLowerCase())
      }
    />
  );
};

export default Search;
