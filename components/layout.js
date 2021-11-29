import { Layout } from "antd";
import Head from "next/head";
import { useState } from "react";
import HeaderComp from "./header";
import Nav from "./navigation";

const { Header, Content, Sider } = Layout;

function withLayout(Comp) {
  function App(props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <Layout
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
        }}
      >
        <Head>
          <title>FlintAPI | Developer</title>
          <meta name="description" content="FlintAPI Developer Dashboard" />
          <link rel="icon" href="/ico.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0,  user-scalable=no, maximum-scale=1"
          />
        </Head>
        <Header
          style={{
            background: "white",
            height: "auto",
            padding: 0,
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
          }}
        >
          <HeaderComp />
        </Header>
        <Layout style={{ height: "calc(100% - 64px)" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed, type) => setCollapsed(collapsed)}
            style={{
              height: "inherit",
              position: "fixed",
              left: 0,
              top: 64,
              bottom: 0,
            }}
          >
            <Nav />
          </Sider>
          <Content
            style={{
              marginTop: 64,
              padding: 20,
              minHeight: "calc(100vh - 64px)",
              overflowY: "scroll",
              marginLeft: collapsed ? 74 : 200,
              transition: "all .15s linear 0s",
            }}
          >
            <Comp {...props} />
          </Content>
        </Layout>
      </Layout>
    );
  }

  return App;
}

export { withLayout };
