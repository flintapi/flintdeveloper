import {
  AppstoreOutlined,
  BugOutlined,
  DashboardOutlined,
  FileOutlined,
  IdcardOutlined,
  ToolOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, LinkIcon } from "evergreen-ui";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
  const router = useRouter();
  const { pathname, asPath } = router;
  console.log(pathname, asPath, "Paths");
  const [path, setPath] = useState(
    asPath.substring(asPath.lastIndexOf("/") + 1)
  );

  console.log("Path clipper", path);

  return (
    <Menu
      onSelect={({ item, key, keyPath }) => {
        console.log(item, key, keyPath);
        setPath(key);
        key !== "dashboard"
          ? router.push("/dashboard/" + key)
          : router.push("/dashboard/");
      }}
      mode="vertical"
      theme="dark"
      defaultSelectedKeys={[path]}
      // selectedKeys={[path]}
      style={{
        height: "auto",
        // backgroundColor: "transparent",
      }}
    >
      <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
        DASHBOARD
      </Menu.Item>
      <Menu.Item key="projects" icon={<DashboardOutlined />}>
        PROJECTS
      </Menu.Item>
      <Menu.Item key="debug" icon={<BugOutlined />}>
        DEBUG
      </Menu.Item>
      <Menu.Item key="dev_tools" icon={<ToolOutlined />}>
        DEV TOOLS
      </Menu.Item>
      <Menu.Item key="wallet" icon={<WalletOutlined />}>
        WALLET
      </Menu.Item>
      <Menu.Item key="outlink1" icon={<FileOutlined />}>
        <Link href="#">DOCS</Link>
        <LinkIcon marginLeft={20} marginTop={12} float="right" />
      </Menu.Item>
      <Menu.Item key="outlink2" icon={<IdcardOutlined />}>
        <Link href="https://www.flintapi.io/contact">CONTACT US</Link>
        <LinkIcon marginLeft={20} marginTop={12} float="right" />
      </Menu.Item>
    </Menu>
  );
}
