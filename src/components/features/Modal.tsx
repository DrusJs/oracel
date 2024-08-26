import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`modal-wrapper fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur px-4 rounded-[50pxrun] ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="bg-white rounded-[50px] sm:py-28 sm:px-20 py-20 px-4 relative">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
