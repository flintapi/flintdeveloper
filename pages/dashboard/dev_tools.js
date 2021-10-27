import { CopyOutlined, ToolOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Link, Text } from "evergreen-ui";
import { withLayout } from "../../components/layout";

function DevTools() {
  return (
    <Row gutter={16} style={{ margin: 0, padding: 0, width: "100%" }}>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Card
          title={
            <>
              <CopyOutlined /> <Text>FLINT API</Text>
            </>
          }
          style={{ height: "100%" }}
          hoverable
          extra={<Link href="#">View more</Link>}
        >
          <Text size={400}>
            Documentation on how to setup your API Key and use our REST API in
            projects
          </Text>
        </Card>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Card
          title={
            <>
              <ToolOutlined /> <Text>FLINT SDK</Text>
            </>
          }
          style={{ height: "100%" }}
          hoverable
          extra={<Link href="#">Coming soon</Link>}
        >
          <Text size={400}>
            Documentation on how to setup our SDK suit for the different
            programming languages you use on your project
          </Text>
        </Card>
      </Col>
    </Row>
  );
}

export default withLayout(DevTools);
