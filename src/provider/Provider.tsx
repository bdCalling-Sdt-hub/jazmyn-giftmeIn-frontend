'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';

const Provider = ({ children }: { children: React.ReactNode }) => {
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
                              <ToastContainer />
                              {children}
                        </AntdRegistry>
                  </ConfigProvider>
            </div>
      );
};

export default Provider;
