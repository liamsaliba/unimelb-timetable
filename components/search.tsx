import { AutoComplete } from "antd";
import { useEffect, useMemo, useState } from "react";

import { Timetable } from "../lib/timetable";
import { SelectItem, Location, OptionItem } from "./item";

const getAutofillItems = (data: Timetable): SelectItem[] => {
  // print all unique items by key subj_code, printing subj_code and subj_name
  const subjects = [];
  data.forEach((event) => {
    if (!subjects.some((subj) => subj.code === event.subj_code)) {
      subjects.push({
        code: event.subj_code,
        name: event.subj_name,
      });
    }
  });

  return [
    ...[...new Set(data.map((e) => e.location))].map((item) => ({
      value: item,
      label: <Location key={item} location={item} />,
    })),
    ...subjects.map(({ code, name }) =>
      OptionItem({
        value: `${code} ${name}`,
        label: name,
        secondaryLabel: code,
      })
    ),
  ];
};
const Search = ({
  data,
  onChange,
  defaultValue,
}: {
  data: Timetable;
  onChange: (value: string) => void;
  defaultValue?: string;
}) => {
  const options = useMemo(() => getAutofillItems(data), [data]);
  // value is controlled so that we can set defaultValue
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  const onFieldChange = (value: string) => {
    setValue(value);
    onChange(value);
  };

  return (
    <AutoComplete
      allowClear
      style={{ width: "100%" }}
      showSearch
      value={value}
      placeholder="Search (room, subject code, subject name)"
      optionFilterProp="label"
      options={options}
      onChange={onFieldChange}
      filterOption={(input, option_) => {
        input = input.toLowerCase();
        const valueParts = input.split(" ");
        const option = option_.value.toLowerCase();
        const optionParts = option.split(" ");
        return (
          valueParts.every((val) => option.includes(val)) ||
          input
            .split("")
            .every((c, i) => optionParts.length > i && optionParts[i][0] == c)
        );
      }}
      filterSort={(optionA, optionB) =>
        optionA.value.toLowerCase().localeCompare(optionB.value.toLowerCase())
      }
    />
  );
};

export default Search;
