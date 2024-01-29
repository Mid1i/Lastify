import "./LogsItem.style.scss";


export default function LogsItem() {
    return (
        <div className="logs__item">
            <div className="logs__item-row">
                <span className="logs__item-text">#33</span>
                <span className="logs__item-text">·</span>
                <span className="logs__item-bold">Bayonet knife | Scorched</span>
                <span className="logs__item-text">·</span>
                <span className="logs__item-text">The price is reduced</span>
                <span className="logs__item-bold">by $453</span>
                <svg className="logs__item-icon logs__item-icon--bold" fill="none" height="14" viewBox="0 0 14 14" width="14">
                    <path d="M10.5407 8.41748L6.99982 11.9583L3.45898 8.41748" stroke="#F8F0FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 2.04169V11.8592" stroke="#F8F0FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="logs__item-text">·</span>
                <span className="logs__item-green">$3 921.35</span>
                <svg className="logs__item-icon" fill="none" height="12" viewBox="0 0 12 12" width="12">
                    <path d="M4.45508 9.95998L7.71508 6.69998C8.10008 6.31498 8.10008 5.68498 7.71508 5.29998L4.45508 2.03998" stroke="#A9A5B0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="logs__item-red">$3 921.35</span>
            </div>
            <div className="logs__item-row">
                <span className="logs__item-type">FN</span>
                <span className="logs__item-text">·</span>
                <span className="logs__item-text">0.071</span>
                <span className="logs__item-text">·</span>
                <span className="logs__item-st">ST</span>
                <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
                    <path d="M6.43673 2.32469L5.15514 4.92319L2.28777 5.34123C1.77356 5.41581 1.56749 6.04973 1.94038 6.41282L4.01487 8.43431L3.52421 11.2899C3.43589 11.8061 3.97954 12.1927 4.43486 11.9513L7 10.603L9.56514 11.9513C10.0205 12.1907 10.5641 11.8061 10.4758 11.2899L9.98514 8.43431L12.0596 6.41282C12.4325 6.04973 12.2264 5.41581 11.7122 5.34123L8.84486 4.92319L7.56327 2.32469C7.33365 1.86151 6.66832 1.85563 6.43673 2.32469Z" fill="#FFC759"/>
                </svg>
            </div>
        </div>
    );
}