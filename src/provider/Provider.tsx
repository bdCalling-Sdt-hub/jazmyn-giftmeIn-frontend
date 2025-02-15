'use client';

import { store } from '@/redux/store';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import NextTopLoader from 'nextjs-toploader';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            // fontFamily: 'Poppins',
            fontSize: 16,
            colorPrimary: '#F82BA9',
          },
          components: {
            Form: {
              labelColor: '#160E4B',
              labelHeight: 24,
              marginLG: 15,
            },
            Input: {
              controlHeight: 40,
              colorText: '#212529BF',
            },
            Select: {
              controlHeight: 40,
              colorIcon: '#9A9F9E',
            },
            DatePicker: {
              controlHeight: 40,
            },
            Button: {
              controlHeight: 40,
            },
            Modal: {
              colorBgContainer: '#FEEDF7',
            },
            Table: {
              headerBg: '#feedf7',
            },
          },
        }}
      >
        <AntdRegistry>
          <Provider store={store}>
            <NextTopLoader color="#F82BA9" showSpinner={false} />
            {children}
            <Toaster position="top-center" />
          </Provider>
        </AntdRegistry>
      </ConfigProvider>
    </div>
  );
};

export default CustomProvider;
