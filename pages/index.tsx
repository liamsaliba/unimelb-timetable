import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getTimetableData, Timetable } from "../lib/timetable";
import { GetStaticProps } from "next";
import Table from "../components/table";
import Search from "../components/search";
import "antd/dist/antd.css";
import { useState } from "react";
import { Tabs } from "antd";
import { TableOutlined, CalendarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function Home({ timetableData }: { timetableData: Timetable }) {
  const [data, setData] = useState(timetableData);

  const onChange = (value: string) => {
    if (value == undefined || value == "") {
      setData(timetableData);
      return;
    }

    value = value.toLowerCase();
    const newData = timetableData.filter((event) => {
      return (
        event.location.toLowerCase().includes(value) ||
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
        <Search data={data} onChange={onChange} />
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <TableOutlined />
                Table
              </span>
            }
            key="1"
          >
            <Table data={data} />
          </TabPane>
          <TabPane
            disabled
            tab={
              <span>
                <CalendarOutlined />
                Calendar
              </span>
            }
            key="2"
          >
            To be implemented
          </TabPane>
        </Tabs>
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
