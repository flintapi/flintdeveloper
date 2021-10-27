import { Col, Row } from "antd";
import { Avatar, Link, Pane } from "evergreen-ui";

export default function Header() {
  return (
    <Row
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
        backgroundColor: "white",
      }}
    >
      <Col xs={{ span: 12 }} lg={{ span: 12 }}>
        <Pane
          display="flex"
          justifyContent="start"
          background="transparent"
          paddingLeft={20}
        >
          <Link href="#">
            <div className="logo">
              {/* <Image src="" alt="" width={160} height={40} /> */}
            </div>
          </Link>
        </Pane>
      </Col>
      <Col xs={{ span: 12 }} lg={{ span: 12 }}>
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="end"
          background="transparent"
          height="100%"
          paddingRight={20}
        >
          <Avatar name="User Name" size={40} />
        </Pane>
        <style jsx global>{`
          .ant-menu-item-active {
            border-color: #ffbd59;
          }
          .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
            color: #ffbd59;
          }
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
        `}</style>
      </Col>
    </Row>
  );
}
