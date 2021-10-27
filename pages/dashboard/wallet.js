import { WalletOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Card, Col, Row, Table } from "antd";
import { Button, Pane, Text } from "evergreen-ui";
import { withLayout } from "../../components/layout";

function Wallet() {
  const columns = [
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Spent",
      dataIndex: "spent",
      key: "spent",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];
  return (
    <Row gutter={[16, 16]} style={{ margin: 0, padding: 0, width: "100%" }}>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Card
          title={
            <>
              <WalletOutlined /> <Text>WALLETS</Text>
            </>
          }
          style={{ height: "100%" }}
          hoverable
        >
          <Text size={600}>
            In this section you can find wallet balance for each Project
          </Text>
          <br />
          <br />
          <Pane
            display="flex"
            flexFlow="row"
            alignItems="center"
            justifyContent="start"
          >
            <Button appearance="primary">API KEYS</Button>
            <Button marginLeft={20}>REFRESH</Button>
          </Pane>
          <br />
          <br />
          <Text size={400}>
            The figure shown below is independent of your plan.
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

export default withLayout(Wallet);
