import React from 'react';
import Portal from './portal';
import "../css/modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  componentDidMount() {
    this.updateBodyOverflow();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.updateBodyOverflow();
      this.toggleEscapeListener();
    }
  }

  componentWillUnmount() {
    // Восстанавливаем прокрутку при размонтировании
    document.body.style.overflow = 'unset';
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape(e) {
    if (e.keyCode === 27) {
        //27 - escape
      this.props.onClose();
      // callback функция на закрытие переданная через props
    }
  }

  handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
        console.log(e)
      this.props.onClose();
    }
  }

  updateBodyOverflow() {
    if (this.props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  toggleEscapeListener() {
    if (this.props.isOpen) {
      document.addEventListener('keydown', this.handleEscape);
    } else {
      document.removeEventListener('keydown', this.handleEscape);
    }
  }

  render() {
    const { isOpen, onClose, children } = this.props; //деструктуризация

    if (!isOpen) return null;

    return (
      <Portal selector="modal-root">
        <div className="modal-overlay" onClick={this.handleOverlayClick}>
          <div className="modal-content">
            <button 
              className="modal-close" 
              onClick={onClose}
              aria-label="Закрыть модальное окно"
            >
              ×
            </button>
            {children}
          </div>
        </div>
      </Portal>
    );
  }
}

export default Modal;