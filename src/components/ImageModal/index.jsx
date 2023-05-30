import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function ImageModal({ image, alt }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageHeight, setImageHeight] = useState('auto');

  function openModal() {
    setModalIsOpen(true);
  }
  
  function closeModal() {
    setModalIsOpen(false);
  }

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      margin: 0,
      width: '100%',
      height: 'auto',
      border: 'none',
      position: 'fixed',
      transition: 'opacity 0.3s ease-in-out',
    },
    content: {
      maxWidth: '1024px',
      height: imageHeight,
      margin: 'auto',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    }
  };

  useEffect(() => {
    const calculateImageHeight = () => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const modalWidth = 1024;
        const calculatedHeight = modalWidth / aspectRatio;
        setImageHeight(calculatedHeight);
      };
    };

    calculateImageHeight();
  }, [image])
  
  return (
    <>
      <img
        src={image}
        alt={alt}
        onClick={openModal}
        style={{
          cursor: 'pointer',
          width: '420px'
        }}
      />
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <img
        src={image}
        alt={alt}
        onClick={closeModal}
        style={{
          width: '100%',
          height: 'auto',
          cursor: 'pointer'
        }}
      />
    </Modal>
    </>
  );
}
