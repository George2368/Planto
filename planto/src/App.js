import React from 'react';
import './css/App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Modal from './components/modal.js';
import HeaderNav from './components/headercomponents/navigation.js';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      items:[
        {
          id: 1,
          name: "Calathea plant",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 359,
          img: "Calathea.png"
        },

        {
          id: 2,
          name: "Ficus plant",
          desc: "Plant emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 459,
          img: "ficus.png"
        },
          {
          id: 3,
          name: "Cactus plant",
          desc: "Cactus emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 499,
          img: "cactus.png"
        },
                {
          id: 4,
          name: "List plant",
          desc: "List ipsum dolor sit amet, consectetur adipiscing elit",
          price: 379,
          img: "List.png"
        },

        {
          id: 5,
          name: "Lists plant",
          desc: "Lists emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 859,
          img: "Lists.png"
        },
          {
          id: 6,
          name: "Cacoeto plant",
          desc: "Cacoeto emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 299,
          img: "cacoeto.png"
        }
      ],
      reviews:[
        {
          id: "r1",
          name: "Alena Pa",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 4.5,
          profile: "alena.png"
        },
        {
          id: "r2",
          name: "Max Raval",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 4,
          profile: "maxn.png"
        },
        {
          id: "r3",
          name: "Venely K",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 5,
          profile: "venely.png"
        },
          {
          id: "r4",
          name: "Lii thakur",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 5,
          profile: "lii.png"
        }

      ],
      isModalOpen: false,
      isSecondModalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openSecondModal = this.openSecondModal.bind(this);
    this.closeSecondModal = this.closeSecondModal.bind(this);
  }
  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  openSecondModal() {
    this.setState({ isSecondModalOpen: true });
  }

  closeSecondModal() {
    this.setState({ isSecondModalOpen: false });
  }
  scrollFunctionPage(scrollEl){
        if (scrollEl) {
             console.log(scrollEl)
        scrollEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
  }
  render(){
      return (
    <div className="App-planto">
               <Modal 
          isOpen={this.state.isModalOpen} 
          onClose={this.closeModal}
        >
           <HeaderNav />
          <div className="modal-actions">
            <button onClick={this.closeModal} className="modal-action-button">
              Закрыть
            </button>
            {/* <button onClick={this.openSecondModal} className="modal-action-button">
              Открыть второе окно
            </button> */}
          </div>
        </Modal>
      <Header classType="" onClickModalFunc={this.openModal}/>
      <Main classType="" onClickModalFunc={this.openSecondModal} itemsCards={this.state.items} reviews={this.state.reviews}/>
      <Footer classType="planto-footer"/>
      
    </div>
  )}

}

export default App;
