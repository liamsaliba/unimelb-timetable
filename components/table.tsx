import { Select, Table } from "antd";

const { Column } = Table;

import { Timetable, Event } from "../lib/timetable";

const TableComponent = ({ data }: { data: Timetable }) => {
  return (
    <>
      <Table
        dataSource={data}
        size="middle"
        pagination={{ pageSize: 50 }}
        scroll={{ y: "70vh" }}
      >
        <Column
          title="Location"
          dataIndex="location"
          key="location"
          filterMode="tree"
          filterSearch
          onFilter={(value: string, record: Event) =>
            record.location.includes(value)
          }
        />
        <Column title="Day" dataIndex="day" key="day" width={100} />
        <Column title="Start" dataIndex="start" key="start" width={60} />
        <Column title="Finish" dataIndex="finish" key="finish" width={60} />
        <Column
          title="Class code"
          dataIndex="class_code"
          key="class_code"
          onFilter={(value: string, record: Event) =>
            record.class_code.indexOf(value) >= 0
          }
          filters={[
            {
              text: "Semester 1",
              value: "/SM1/",
            },
            {
              text: "Semester 2",
              value: "/SM2/",
            },
          ]}
        />
        <Column title="Subject" dataIndex="subj_name" key="subj_name" />
      </Table>
    </>
  );
};

export default TableComponent;
