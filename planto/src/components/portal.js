// Portal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.portalElement = null;
  }

  componentDidMount() {
    const { selector = 'portal-root' } = this.props;
//const selector = this.props.selector !== undefined ? this.props.selector : 'portal-root';
// Как это работает:
// Если в this.props есть свойство selector → используется его значение

// Если в this.props нет свойства selector или оно undefined → используется значение по умолчанию 'portal-root'
    // Создаем элемент если его нет
    let portalElement = document.getElementById(selector);
    
    if (!portalElement) {
      portalElement = document.createElement('div');
      portalElement.id = selector;
      document.body.appendChild(portalElement);
    }
    
    this.portalElement = portalElement;
    this.forceUpdate();
  }

  componentWillUnmount() {
    // Очистка при размонтировании
    if (this.portalElement && !document.getElementById(this.props.selector)) {
      document.body.removeChild(this.portalElement);
    }
  }

  render() {
    if (!this.portalElement) return null;
    return createPortal(this.props.children, this.portalElement);
    //children - массив элмементов анхзодящичя внутри компонента
  }
}

export default Portal;