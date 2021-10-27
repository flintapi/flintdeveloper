import { PlusSquareOutlined } from "@ant-design/icons";
import { Card, Col, List, Row, Statistic } from "antd";
import { Button, Link, Text } from "evergreen-ui";
import { useRouter } from "next/router";
import { withLayout } from "../../components/layout";

function Projects() {
  const router = useRouter();
  console.info(
    "Query props from router",
    router.query?.projectId,
    router.query?.action
  );
  return (
    <Row gutter={[16, 16]} style={{ margin: 0, padding: 0, width: "100%" }}>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <Card style={{ height: "100%" }} hoverable>
          <Statistic title="ACTIVE API KEYS" value={0} suffix="/ 10" />
        </Card>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <Card style={{ height: "100%" }} hoverable>
          <Statistic title="TOTAL API CALLS" value={7} />
        </Card>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <Card style={{ height: "100%" }} hoverable>
          <Statistic title="TOTAL PROJECTS" value={3} />
        </Card>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <Card
          title={
            <>
              <PlusSquareOutlined /> <Text>NEW PROJECT</Text>
            </>
          }
          style={{ height: "100%" }}
          hoverable
        >
          <Button
            appearance="primary"
            onClick={(e) => router.push("?action=create")}
          >
            CREATE
          </Button>
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <List
            // loading={initLoading}
            itemLayout="vertical"
            // loadMore={loadMore}
            dataSource={[
              { name: "Yinka", network: "BSC", usage: 0, plan: "FREE" },
              { name: "Temple Run", network: "BSC", usage: 1, plan: "FREE" },
            ]}
            renderItem={(item) => (
              <List.Item style={{ width: "100%" }}>
                <ProjectInfoTile
                  name={item.name}
                  network={item.network}
                  usage={item.usage}
                  plan={item.plan}
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
}

const ProjectInfoTile = ({ name, network, usage, plan }) => (
  <Card hoverable>
    <Row gutter={[8, 8]} style={{ width: "100%", margin: 0, padding: 0 }}>
      <Col xs={{ span: 24 }} lg={{ span: 5 }}>
        <Statistic title="NAME" value={name} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 5 }}>
        <Statistic title="NETWORK" value={network} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 5 }}>
        <Statistic title="CREDIT USAGE" value={usage} suffix="/ --" />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 5 }}>
        <Statistic title="PLAN" value={plan} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 4 }}>
        {/* <Button appearance="primary" allowUnsafeHref={true}> */}
        <Link href="?projectId=test_id">SHOW MORE</Link>
        {/* </Button> */}
      </Col>
    </Row>
  </Card>
);

export async function getServerSideProps({ req, res, query, params }) {
  const { projectId, action } = query;
  console.log("Quesry props", projectId, action);

  // return props
  return {
    props: {
      projectId: projectId || null,
      action: action || null,
    },
  };
}

export default withLayout(Projects);
