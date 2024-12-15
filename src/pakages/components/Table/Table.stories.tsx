import Table from "./Table";
import { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";
//const [tbData, setTbData] = useState([]);
const tableData = [
  {
    id: 1,
    name: "name 1",
    count: 10,
    enabled: "true",
    gender: "male",
  },
  {
    id: 2,
    name: "name 2",
    count: 0,
    enabled: "false",
    gender: "male",
  },
  {
    id: 3,
    name: "name 3",
    count: 10,
    enabled: "true",
    gender: "male",
  },
  {
    id: 4,
    name: "name 4",
    count: 10,
    enabled: "true",
    gender: "male",
  },
];

const tableData1 = [
  {
    id: 10,
    name: "name 10",
    count: 10,
    enabled: "true",
    gender: "male",
  },
  {
    id: 20,
    name: "name 20",
    count: 0,
    enabled: "false",
    gender: "male",
  },
  {
    id: 30,
    name: "name 30",
    count: 10,
    enabled: "true",
    gender: "male",
  },
  {
    id: 40,
    name: "name 40",
    count: 10,
    enabled: "true",
    gender: "male",
  },
];

// const [tbData, setTbData] = useState(tableData);

const meta = {
  title: "Demo/Table",
  component: Table,
  tags: ["autodocs"],
  data: [{}],
  total: 0,
  onPageChange: (page: number, pageSize: number) => {
    console.log(page, pageSize);
    // now setting new data
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Primary: Story = {
  args: {
    title: "My Own Table",
    data: tableData,
    total: 4,
    onPageChange: (page, pageSize) => {
      console.log(page, pageSize);
    },
  },
};
