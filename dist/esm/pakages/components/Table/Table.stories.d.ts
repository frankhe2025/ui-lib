/// <reference types="react" />
import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: any) => import("react").JSX.Element;
    tags: string[];
    data: {}[];
    total: number;
    onPageChange: (page: number, pageSize: number) => void;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
