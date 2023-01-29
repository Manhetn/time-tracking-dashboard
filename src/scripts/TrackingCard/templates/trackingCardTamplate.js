export const trackingCardTamplate = ({
  id,
  title,
  current,
  previous,
  periodText,
}) => `<article class="tracking-card tracking-card--${id}">
          <div class="tracking-card__contant">
            <div class="tracking-card__header">
              <h4 class="tracking-card__title">${title}</h4>
              <a class="tracking-card__button" role="button">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF"
                    fill-rule="evenodd"/>
                </svg>
              </a>
            </div>
            <div class="tracking-card__body">
              <span class="tracking-card__time">${current}hrs</span>
              <span class="tracking-card__prev-period">Last ${periodText} - ${previous}hrs</span>
            </div>
          </div>
        </article>`;
