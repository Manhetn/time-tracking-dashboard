import { trackingCardTamplate } from './templates/trackingCardTamplate';

export default class TrackingCard {
  static PERIODS = {
    daily: 'day',
    weekly: 'week',
    monthly: 'month',
  };

  constructor(parentСontainer, cardData, view) {
    this.parentContainer = parentСontainer;
    this.cardData = cardData;
    this.view = view;
    this.id = null;
    this.card = null;
    this.button = null;
    this.time = null;
    this.prev = null;
    this._init();
  }

  _init() {
    this._createCard();
    this._settingElements();
    this._addListeners();
  }

  _createCard() {
    const { title, timeframes } = this.cardData;
    const { current, previous } = timeframes[this.view];
    this.id = title.toLowerCase().replace(/ /g, '-');
    this.parentContainer.insertAdjacentHTML(
      'beforeend',
      trackingCardTamplate({
        id: this.id,
        title,
        current,
        previous,
        periodText: TrackingCard.PERIODS[this.view],
      })
    );
  }

  _settingElements() {
    this.card = this.parentContainer.querySelector(
      `.tracking-card--${this.id}`
    );
    this.time = this.card.querySelector(`.tracking-card__time`);
    this.prev = this.card.querySelector(`.tracking-card__prev-period`);
    this.button = this.card.querySelector(`.tracking-card__button`);
  }

  _addListeners() {
    this.button.addEventListener('click', () => {
      alert(
        'Congratulations! You clicked on the card button and nothing happens :( But something good will happen in the future! :)'
      );
    });
  }

  changeView(view) {
    this.view = view;
    const { current, previous } =
      this.cardData.timeframes[this.view.toLowerCase()];

    this.time.innerText = `${current}hrs`;
    this.prev.innerText = `Last ${
      TrackingCard.PERIODS[this.view]
    } - ${previous}hrs`;
  }
}
