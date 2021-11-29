import { InfoCircleFilled, PlusSquareOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  Input,
  List,
  message,
  Row,
  Select,
  Statistic,
  Steps,
  Table,
} from "antd";
import { Button, Heading, Link, Pane, Text } from "evergreen-ui";
import { useRouter } from "next/router";
import { useState } from "react";
import { withLayout } from "../../components/layout";

const { Option } = Select;
const { Step } = Steps;
const columns = [
  {
    title: "Project Status",
    dataIndex: "project_status",
    key: "project_status",
  },
  {
    title: "Credit Usage",
    dataIndex: "credit_usage",
    key: "credit_usage",
  },
  {
    title: "Last Cycle",
    dataIndex: "last_cycle",
    key: "last_cycle",
  },
  {
    title: "Next Cycle",
    dataIndex: "next_cycle",
    key: "next_cycle",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

function Projects() {
  const router = useRouter();
  const {
    query: { action, projectId },
  } = router;
  console.info("Query props from router", projectId, action);
  return (
    <>
      {action != undefined && action == "create" && (
        <NewProjectComp router={router} />
      )}

      {projectId != undefined && (
        <ProjectDetails name="Miracle" network="BSC" usage="" plan="FREE" />
      )}
      {action == undefined && projectId == undefined && (
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
                  {
                    name: "Temple Run",
                    network: "BSC",
                    usage: 1,
                    plan: "FREE",
                  },
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
      )}
    </>
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

const ProjectDetails = ({ name, network, usage, plan }) => (
  <>
    <Card hoverable style={{ marginBottom: 20 }}>
      <Row gutter={[8, 8]} style={{ width: "100%", margin: 0, padding: 0 }}>
        <Col xs={{ span: 24 }} lg={{ span: 5 }}>
          <Statistic title="NAME" value={name} />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 5 }}>
          <Statistic title="NETWORK" value={network} />
        </Col>

        <Col xs={{ span: 24 }} lg={{ span: 5 }}>
          <Statistic title="PLAN" value={plan} />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
          {/* <Button appearance="primary" allowUnsafeHref={true}> */}
          <Link href="/dashboard/projects">YOUR PROJECTS</Link>
          {/* </Button> */}
        </Col>
      </Row>
    </Card>
    <Card>
      <Table columns={columns} dataSource={[]} loading={true} />
    </Card>
  </>
);

const NewProjectComp = ({ router }) => {
  const [projectName, setProjectName] = useState();
  const [network, setNetwork] = useState();
  const [gameType, setGameType] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  return (
    <Row gutter={8} style={{ width: "100%", margin: 0, padding: 0 }}>
      <Col span={6}></Col>
      <Col
        span={12}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 50,
          paddingBottom: 60,
          backgroundColor: "white",
        }}
      >
        {/* <Steps progressDot>
          <Step title="New Project"> */}
        <Heading textAlign="center">SET UP YOUR NEW PROJECT</Heading>
        <br />
        <br />
        <Text>NAME</Text>
        <Input
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <br />
        <br />
        <Text>NETWORK</Text>
        <Select
          placeholder="Select Network"
          style={{ width: "100%" }}
          value={network}
          onChange={(value) => setNetwork(value)}
        >
          <Option value="bsc">Binance Smart Chain</Option>
          <Option value="eth" disabled>
            Ethereum (Coming soon)
          </Option>
          <Option value="sol" disabled>
            Solana (Coming soon)
          </Option>
        </Select>
        <br />
        <br />
        <Text>GAME TYPE</Text>
        <Select
          placeholder="Select Game Type"
          style={{ width: "100%" }}
          value={gameType}
          onChange={(value) => setGameType(value)}
        >
          <Option value="mobile">Mobile</Option>
          <Option value="desktop">Desktop</Option>
          <Option value="console">Console</Option>
        </Select>
        <br />
        <br />
        <Text>TOKEN SYMBOL</Text>
        <Input
          placeholder="Symbol of the NFT token"
          value={tokenSymbol?.toUpperCase()}
          onChange={(e) => setTokenSymbol(e.target.value)}
        />
        <br />
        <br />
        <br />
        <br />
        <Pane paddingX={30} textAlign="center">
          <Text textAlign="center" size={100}>
            <InfoCircleFilled />
            <br /> Creating a project also creates the NFT Smart Contract and
            your API Key, please do not disclose your API Key to a third party.
          </Text>
        </Pane>
        {/* </Step>
          <Step title="Setting Up">
            <Heading>Project is being set up</Heading>
          </Step>
          <Step title="All Done">
            <Heading>Project setup and all done</Heading>
          </Step>
        </Steps> */}

        <br />
        <br />
        <Pane display="flex" alignItems="center" justifyContent="space-between">
          <Button onClick={(e) => router.push("/dashboard/projects")}>
            Back to plan
          </Button>
          <Button
            appearance="primary"
            onClick={(e) => {
              // TODO: check if the project setup
              if (!projectName || !gameType || !network) {
                message.warn("All fields must be filled");
                return;
              }
              // TODO: if all is well send details to backend and setup project
              message.success("Proceeding to create API keys for project...");
            }}
          >
            Create key
          </Button>
        </Pane>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

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
