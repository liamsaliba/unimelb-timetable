import { Select, Table } from "antd";

const { Column } = Table;

import { Timetable, Event } from "../lib/timetable";

const TableComponent = ({ data }: { data: Timetable }) => {
  
  return (
    <>
      <Table dataSource={data}>
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
        <Column title="Class code" dataIndex="class_code" key="class_code" />
        <Column title="Subject" dataIndex="subj_name" key="subj_name" />
        <Column title="Day" dataIndex="day" key="day" />
        <Column title="Start" dataIndex="start" key="start" />
        <Column title="Finish" dataIndex="finish" key="finish" />
      </Table>
    </>
  );
};

export default TableComponent;
