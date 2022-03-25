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

    const valueParts = value.toLowerCase().split(" ");

    const newData = timetableData.filter((event) => {
      const eventValues = [
        event.location.toLowerCase(),
        event.subj_code.toLowerCase(),
        event.subj_name.toLowerCase(),
      ];
      return valueParts.every((val) =>
        eventValues.some((v) => v.includes(val))
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
