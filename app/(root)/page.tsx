'use client';
import { Modal } from '@/components/ui/modal';

const SetUpPage = () => {
  return (
    <div className='p-4'>
      <Modal isOpen title='Test' description='Test Desc' onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetUpPage;
