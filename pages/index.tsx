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

export default function Home({ timetableData }: { timetableData: Timetable }) {
  const options = useMemo(() => {
    const places = new Set<string>(
      timetableData.map((event) => event.location || "Online")
    );
    const subjects = new Set<string>(
      timetableData.map((event) => event.subj_code)
    );
    const subject_names = new Set<string>(
      timetableData.map((event) => event.subj_name)
    );

    const all_items = [...places, ...subjects, ...subject_names];

    const vals: SelectItem[] = all_items.map((item) => ({
      value: item,
      label: item,
    }));
    return vals;
  }, timetableData);

  const [data, setData] = useState(timetableData);

  const onChange = (value: string) => {
    console.log(value);
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
          placeholder="Search"
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
