import { Button, Modal } from 'antd';
import { FaExclamation } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DeleteAccount = () => {
      const handleDeleteAccount = () => {
            Modal.confirm({
                  centered: true,
                  title: 'Close your account',
                  content: 'Are you sure you want to close your account? This action cannot be undone.',
                  okText: 'Confirm',
                  cancelText: 'Cancel',
                  icon: <FaExclamation className="mx-2" size={24} color="#F82BA9" />,
                  okButtonProps: {
                        style: { backgroundColor: '#F82BA9', borderColor: '#ff4d4f', color: '#fff' },
                  },

                  cancelButtonProps: {
                        style: { color: '#F82BA9', borderColor: 'transparent', fontWeight: 'bold' },
                  },

                  onOk: () => {
                        toast.success('Account closed successfully');
                  },
            });
      };
      return (
            <div>
                  <div className="w-full space-y-3  max-w-lg p-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900">Close your account</h3>
                        <p className=" text-gray-600 mt-1">
                              Once you delete your account, there’s no going back. Please be certain!
                        </p>
                        <Button className="my-3" type="primary" onClick={handleDeleteAccount}>
                              Delete Account
                        </Button>
                  </div>
            </div>
      );
};

export default DeleteAccount;
