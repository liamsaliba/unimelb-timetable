import { AutoComplete } from "antd";
import { useMemo } from "react";

import { Timetable } from "../lib/timetable";

interface SelectItem {
  value: string;
  label: string;
}

const getAutofillItems = (data: Timetable): SelectItem[] => {
  const places = new Set<string>(
    data.map((event) => event.location || "Online")
  );
  const subjects = new Set<string>(data.map((event) => event.subj_code));
  const subject_names = new Set<string>(data.map((event) => event.subj_name));

  const all_items = [...places, ...subjects, ...subject_names];

  const vals: SelectItem[] = all_items.map((item) => ({
    value: item,
    label: item,
  }));
  return vals;
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
        option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
      }
    />
  );
};

export default Search;
