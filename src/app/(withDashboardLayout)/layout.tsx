'use client';
import React, { useState } from 'react';

import { Layout, theme, ConfigProvider } from 'antd';

import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai';
import ProfileSidebar from '@/components/layout/ProfileSidebar';

const { Header, Content, Sider } = Layout;

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: '#F82BA9',
            itemSelectedColor: '#FFFFFF',
          },
        },
      }}
    >
      <div>
        <Layout className="container my-20">
          <Sider
            width={282}
            theme="light"
            // breakpoint="lg"
            collapsedWidth={0}
            // collapsible
            className="rounded-lg shadow-lg border-[1px] border-[#dfdddd63]"
            collapsed={collapsed}
            onCollapse={(isCollapsed) => setCollapsed(isCollapsed)}
          >
            <ProfileSidebar />
          </Sider>
          <Layout
            style={{
              zIndex: 2,
            }}
          >
            <Header
              style={{
                background: colorBgContainer,
                paddingInline: 20,
              }}
            >
              <button className="text-primary" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <AiOutlineRightSquare size={30} /> : <AiOutlineLeftSquare size={30} />}
              </button>
            </Header>
            <Content>
              <div className="w-full px-6  overflow-x-scroll  hide-scrollbar">{children}</div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default DashboardLayout;
