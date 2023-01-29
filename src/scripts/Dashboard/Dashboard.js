import fakeApi from '../../fakeApi/fakeApi';
import TrackingCard from '../TrackingCard/TrackingCard';

export default class Dashboard {
  constructor(elem) {
    this.elem = elem;
    this.contentContainer = this.elem.querySelector('.dashboard__content');
    this.preloader = this.elem.querySelector('.preloader');
    this.userAvatar = this.elem.querySelector('.user-info__photo');
    this.userName = this.elem.querySelector('.user-info__title');
    this.cardsContainer = this.elem.querySelector('.dashboard__tracking-cards');
    this.viewInputs = document.querySelectorAll(
      '.view-selector__type-view-input'
    );
    this.trackingCards = null;
    this.data = null;
  }

  init() {
    this._loadData().then((data) => {
      this.data = data;
      this._setUserInfo();
      this._renderCards();
      this._showContent();
      this._addListeners();
    });
  }

  _loadData() {
    return fakeApi.get();
  }

  _showContent() {
    this.preloader.classList.add('preloader--hidden');
    this.contentContainer.classList.remove('dashboard__content--hidden');
  }

  _renderCards() {
    const view = this.elem.querySelector(
      '.view-selector__type-view-input[checked="checked"]'
    ).value;
    this.trackingCards = this.data.tracking.map((cardData) => {
      return new TrackingCard(this.cardsContainer, cardData, view);
    });
  }

  _setUserInfo() {
    this.userAvatar.src = this.data.avatar;
    this.userName.innerText = this.data.name;
  }

  _addListeners() {
    this.viewInputs.forEach((viewInputs) => {
      viewInputs.addEventListener('click', () => {
        this.viewInputs.forEach((viewSelectorItem) =>
          viewSelectorItem.removeAttribute('checked')
        );
        viewInputs.setAttribute('checked', 'checked');

        this.trackingCards.forEach((trackingCard) => {
          trackingCard.changeView(viewInputs.value);
        });
      });
    });
  }
}
