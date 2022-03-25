import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getTimetableData, Timetable } from "../lib/timetable";
import { GetStaticProps } from "next";
import Table from "../components/table";
import "antd/dist/antd.css";
import { useMemo, useState } from "react";
import { AutoComplete, Select } from "antd";

interface SelectItem {
  value: string;
  label: string;
}

const getAutofillItems = (data: Timetable): SelectItem[] => {
  const places = new Set<string>(
    data.map((event) => event.location || "Online")
  );
  const subjects = new Set<string>(
    data.map((event) => event.subj_code)
  );
  const subject_names = new Set<string>(
    data.map((event) => event.subj_name)
  );

  const all_items = [...places, ...subjects, ...subject_names];

  const vals: SelectItem[] = all_items.map((item) => ({
    value: item,
    label: item,
  }));
  return vals;
};

export default function Home({ timetableData }: { timetableData: Timetable }) {
  const options = useMemo(() => getAutofillItems(timetableData), timetableData);

  const fuse = new Fuse(timetableData, {
    keys: ['subj_name', 'subj_code', 'class_code', 'location']
  })

  const [data, setData] = useState(timetableData);

  const onChange = (value: string) => {
    if (value == undefined) {
      setData(timetableData);
      return;
    }

    value = value.toLowerCase();
    const newData = timetableData.filter((event) => {
      return (
        (event.location || "Online").toLowerCase().includes(value) ||
        event.subj_code.toLowerCase().includes(value) ||
        event.subj_name.toLowerCase().includes(value)
      );
    });
    setData(newData);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
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
            optionA.label
              .toLowerCase()
              .localeCompare(optionB.label.toLowerCase())
          }
        />
        <Table data={data} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const timetableData = getTimetableData();
  return {
    props: {
      timetableData,
    },
  };
};
