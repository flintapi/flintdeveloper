import { BugOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Card, Col, Row, Select, Table } from "antd";
import { Button, Pane, Text } from "evergreen-ui";
import { withLayout } from "../../components/layout";

const { Option } = Select;

function Debug() {
  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Request",
      dataIndex: "request",
      key: "request",
    },
    {
      title: "Response",
      dataIndex: "response",
      key: "response",
    },
    {
      title: "Response time",
      dataIndex: "response time",
      key: "response time",
    },
  ];
  return (
    <Row gutter={[16, 16]} style={{ margin: 0, padding: 0, width: "100%" }}>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Card
          title={
            <>
              <BugOutlined /> <Text>DEBUG</Text>
            </>
          }
          style={{ height: "100%" }}
          hoverable
        >
          <Text size={600}>
            In this section you can find last API calls for selected API key.
          </Text>
          <br />
          <br />
          <Pane
            display="flex"
            flexFlow="row"
            alignItems="center"
            justifyContent="start"
          >
            {/* <Button appearance="primary">TEMPLE RUN</Button> */}
            <Select
              defaultActiveFirstOption
              placeholder="Select project"
              size="large"
              style={{
                width: 150,
              }}
            >
              <Option value="temple_run">Temple Run</Option>
              <Option value="yinka">Yinka</Option>
              <Option value="game_two">Game Two</Option>
            </Select>
            <Button marginLeft={20}>REFRESH</Button>
          </Pane>
          <br />
          <br />
          <Text size={400}>
            <b>Selected API key:</b> 64a4be38-2dd9-44d4-9776-33274bc2d076
          </Text>
        </Card>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Card
          title={
            <>
              <YoutubeOutlined /> <Text>VIDEO TUTORIAL</Text>
            </>
          }
          style={{ height: "100%" }}
          hoverable
        >
          <Text size={400}>Brief Video about this section</Text>
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Table columns={columns} dataSource={[]} />
        </Card>
      </Col>
    </Row>
  );
}

export default withLayout(Debug);
