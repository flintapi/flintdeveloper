import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Input, Layout, Row } from "antd";
import { Heading, Link, Text } from "evergreen-ui";
import Head from "next/head";
import { useState } from "react";

const { Content } = Layout;

export default function Signup() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  return (
    <>
      <Head>
        <title>FlintAPI | Signup</title>
        <meta
          name="description"
          content="FlintAPI. Signup and enjoy our awesome easy to use NFT Rest API"
        />
        <link rel="icon" href="/ico.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,  user-scalable=no, maximum-scale=1"
        />
      </Head>
      <Layout
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
          backgroundImage: "url('/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Content style={{ width: "100%", height: "100%" }}>
          <Row
            gutter={8}
            style={{ width: "100%", margin: 0, padding: 0, height: "100%" }}
          >
            <Col
              xs={{ span: 24, order: 2 }}
              lg={{ span: 12, order: 1 }}
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              <div className="logo" />
              <Card
                style={{
                  margin: "0px 20%",
                  minHeight: "70%",
                  borderRadius: 30,
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Text textAlign="center" size={600}>
                  SIGNUP
                </Text>
                <br />
                <br />
                <Input type="text" placeholder="Name" />
                <br />
                <br />
                <Input type="email" placeholder="Email" />
                <br />
                <br />
                <Input
                  type={passwordHidden ? "password" : "text"}
                  placeholder="Password (8 characters minimum)"
                  style={{ marginBottom: 10 }}
                  suffix={
                    passwordHidden ? (
                      <EyeOutlined
                        onClick={() => setPasswordHidden(!passwordHidden)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        onClick={() => setPasswordHidden(!passwordHidden)}
                      />
                    )
                  }
                />
                <Checkbox onChange={(e) => alert(e.target.checked)}>
                  I accept FLINT's API <Link href="#">Terms of Service</Link>,
                  and have read {"FLINT's"} <Link href="#">Privacy Policy</Link>
                  .
                </Checkbox>
                <br />
                <br />
                <br />
                <Button
                  type="link"
                  href="/dashboard"
                  size="large"
                  block
                  style={{
                    backgroundColor: "#FFBD59",
                    color: "#FFFFFF",
                  }}
                >
                  SIGN UP
                </Button>
                <Text size={300}>
                  Already have an account? <Link href="/login">LOG IN</Link>
                </Text>
                <br />
                <br />
                <br />

                <Text size={300}>© 2021 FLINT</Text>
              </Card>
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              lg={{ span: 12, order: 2 }}
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 40px",
                }}
              >
                <Heading textTransform="uppercase" size={600} textAlign="left">
                  Awesome features that await you
                </Heading>
                <br />
                <br />
                <ul>
                  <li>
                    <Text size={600} fontWeight="bold">
                      Multi-chain NFT Api that connects to over 20 blockchain
                      network
                    </Text>
                  </li>
                  <li>
                    <Text size={600} fontWeight="bold">
                      Connect to an API built for developers by developers
                    </Text>
                  </li>
                  <li>
                    <Text size={600} fontWeight="bold">
                      Scalable solution that {"doesn't"} require blockchain
                      coding
                    </Text>
                  </li>
                  <li>
                    <Text size={600} fontWeight="bold">
                      Watch sample data tried out with our APIs in our Sandbox
                      environment
                    </Text>
                  </li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Text>
                  You have a Question? <Link href="#">CONTACT SALES</Link>
                </Text>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <style jsx global>{`
        .logo {
          float: left;
          width: 120px;
          height: 40px;
          background-image: url("/logo-black.png");
          background-size: 150%;
          background-position: center;
          background-repeat: no-repeat;
          margin: 10px 24px 10px 0;
        }
        .logo-white {
          float: left;
          width: 120px;
          height: 40px;
          background-image: url("/logo-white.png");
          background-size: 150%;
          background-position: center;
          background-repeat: no-repeat;
          margin: 10px 24px 10px 0;
        }
        ul {
          list-style: none;
          list-style-type: none;
          line-height: 12px;
        }
        ul > li {
          list-style: url("/signup-check-icon.svg");
          // list-style-type: ;
          margin: auto 10px;
        }
      `}</style>
    </>
  );
}
