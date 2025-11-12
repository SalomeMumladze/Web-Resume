import { Table, Space, Typography, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import companyLogo from "../assets/company-logo.svg";

const { Text, Link } = Typography;

const dataSource = Array.from({ length: 10 }).map((_, i) => ({
  key: i,
  jobTitle: "Job Title",
  company: "WebResume",
  datePosted: "20/03/2020",
  deadline: { from: "20/02/2025", to: "20/05/2025" },
}));

const JobListingTable = () => {
  const columns = [
    {
      title: (
        <Text className="!font-normal !text-xs text-[#717680]">Job Tittle</Text>
      ),
      dataIndex: "jobTitle",
      key: "jobTitle",
      render: (text) => (
        <Space>
          <Button
            type="text"
            className="m-0 p-0"
            icon={
              <StarOutlined
                style={{ fontSize: 20 }}
                className="text-grayishBlue "
              />
            }
          />
          <Text className="font-normal">{text}</Text>
        </Space>
      ),
    },
    {
      title: (
        <Text className="!font-normal !text-xs text-[#717680]">Company</Text>
      ),
      dataIndex: "company",
      key: "company",
      width: 260,
      render: (text) => (
        <Space>
          <img src={companyLogo} width={24} height={24} />
          <Text className="text-dark text-base font-normal">{text}</Text>
        </Space>
      ),
    },
    {
      title: (
        <Text className="!font-normal !text-xs text-[#717680]">
          Date Posted
        </Text>
      ),
      dataIndex: "datePosted",
      key: "datePosted",
      width: 250,
      render: (text) => (
        <Text className="text-sm font-light text-[#535862]">{text}</Text>
      ),
    },
    {
      title: (
        <Text className="!font-normal !text-xs text-[#717680]">Deadline</Text>
      ),
      dataIndex: "deadline",
      key: "deadline",
      width: 300,
      render: (text) => (
        <Space className="text-sm flex gap-3 font-light">
          <Text>
            From <Link>{text.from}</Link>
          </Text>
          <Text>
            To <Link>{text.to}</Link>
          </Text>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: "3px solid #EAEFF6",
      }}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1000 }}
        sticky={{ offsetHeader: 0 }}
        pagination={false}
        className="bg-white font-thin"
      />
    </div>
  );
};
export default JobListingTable;
