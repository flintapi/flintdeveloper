import { Layout } from "antd";
import HeaderComp from "./header";
import Nav from "./navigation";

const { Header, Content, Sider } = Layout;

function withLayout(Comp) {
  function App(props) {
    return (
      <Layout
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
        }}
      >
        <Header style={{ background: "white", height: "auto", padding: 0 }}>
          <HeaderComp />
        </Header>
        <Layout style={{ height: "calc(100% - 64px)" }}>
          <Sider collapsible style={{ height: "inherit" }}>
            <Nav />
          </Sider>
          <Content style={{ padding: 20 }}>
            <Comp {...props} />
          </Content>
        </Layout>
      </Layout>
    );
  }

  return App;
}

export { withLayout };
