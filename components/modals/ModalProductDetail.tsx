import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CustomButton from '@/components/others/CustomButton';
import ProductArea from '@/components/(front)/Product/ProductArea';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalProps {
  productDetail: any;
  onClose: () => void;
}

const ModalProductDetail: React.FC<ModalProps> = ({ productDetail, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed w-screen h-screen top-0 left-0 flex lg:items-center items-start lg:justify-center justify-start z-20">
      <div
        className="bg-gray-900/60 w-screen h-screen fixed left-0 top-0 transition-all duration-300 animate-sidebarBgSmooth z-10"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-sm 2xl:w-[calc(100vw-34%)] xl:w-[calc(100vw-250px)] lg:w-[calc(100vw-250px)] lg:h-[calc(100dvh-18%)] w-screen h-[100dvh] shadow-lg shadow-gray-600 transition-all duration-300 animate-modalContentSmooth z-20">
        <CustomButton
          containerStyles="absolute lg:-right-4 lg:-top-4 right-6 top-6 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 z-10 bg-white rounded-full"
          leftIcon={<IoCloseOutline className="text-4xl" />}
          handleClick={onClose}
        />
        <div className="w-full h-full lg:overflow-hidden overflow-y-auto">
          <ProductArea product={productDetail} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalProductDetail;
