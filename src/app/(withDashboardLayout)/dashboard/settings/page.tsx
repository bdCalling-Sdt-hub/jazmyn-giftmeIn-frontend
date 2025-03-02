'use client';
import Tab from '@/components/Reusable/Tab';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeletePassword';

const SettingsPage = () => {
  return (
    <div>
      <Tab
        tabs={[
          { key: 'change-password', label: 'Change Password', content: <ChangePassword /> },
          //     { key: 'account', label: 'Account', content: <DeleteAccount /> },
        ]}
      />
    </div>
  );
};

export default SettingsPage;
