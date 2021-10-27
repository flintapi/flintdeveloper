import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Input, Layout, Row } from "antd";
import { Link, Text } from "evergreen-ui";
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
              xs={{ span: 24 }}
              lg={{ span: 24 }}
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
                  GET TO YOUR DASHBOARD
                </Text>
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
                <Text
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  size={200}
                >
                  <Checkbox onChange={(e) => alert(e.target.checked)}>
                    Remember me
                  </Checkbox>
                  <Link href="#">Forgot password</Link>
                </Text>
                <br />
                <br />
                <br />
                <Button
                  type="link"
                  size="large"
                  block
                  style={{
                    backgroundColor: "#FFBD59",
                    color: "#FFFFFF",
                  }}
                >
                  LOG IN
                </Button>
                <Text size={300}>
                  Don’t have an account? <Link href="/signup">SIGN UP</Link>
                </Text>
                <br />
                <br />
                <br />
                <br />

                <Text size={300}>© 2021 FLINT</Text>
                <br />
                <Text size={200}>
                  <Link href="#">Terms of use</Link> •{" "}
                  <Link href="#">Privacy Policy</Link>
                </Text>
              </Card>
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
