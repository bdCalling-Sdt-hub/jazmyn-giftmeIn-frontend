'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
      key: string;
      label: string;
      content: React.ReactNode;
}

interface ReusableTabProps {
      tabs: Tab[];
      defaultActiveKey?: string;
}

const Tab: React.FC<ReusableTabProps> = ({ tabs, defaultActiveKey }) => {
      const [activeTab, setActiveTab] = useState(defaultActiveKey || tabs[0]?.key);

      const handleTabChange = (key: string) => {
            setActiveTab(key);
      };

      return (
            <div className="">
                  <div className="flex border-b border-gray-200 w-fit">
                        {tabs.map((tab) => (
                              <motion.button
                                    key={tab.key}
                                    className={`relative py-2 px-4 transition-all ${
                                          activeTab === tab.key ? 'text-primary' : 'text-title'
                                    }`}
                                    onClick={() => handleTabChange(tab.key)}
                              >
                                    {tab.label}

                                    <motion.div
                                          className="absolute -bottom-1 left-0 h-[4px] bg-primary"
                                          initial={{ width: 0 }}
                                          whileHover={{ width: '100%' }}
                                          animate={{ width: activeTab === tab.key ? '100%' : 0 }}
                                          transition={{ duration: 0.3 }}
                                    />
                              </motion.button>
                        ))}
                  </div>

                  <motion.div
                        className="p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                  >
                        {tabs.map((tab) =>
                              activeTab === tab.key ? (
                                    <motion.div
                                          key={tab.key}
                                          className="text-gray-700"
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.3 }}
                                    >
                                          {tab.content}
                                    </motion.div>
                              ) : null,
                        )}
                  </motion.div>
            </div>
      );
};

export default Tab;
