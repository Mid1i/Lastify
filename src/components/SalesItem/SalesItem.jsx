import classNames from "classnames";

import "./SalesItem.style.scss";


export default function SalesItem({image, name, skin, st = false, itemType, type, float, days, bought, sold, profit, marketplace, account, time, date, status}) {
    const getStatus = () => {
        if (status === 'Accepted') {
            return (
                <div className="sales__item-status sales__item-status--accepted">
                    <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                        <path d="M7.62502 1.66669C4.41085 1.66669 1.79169 4.28585 1.79169 7.50002C1.79169 10.7142 4.41085 13.3334 7.62502 13.3334C10.8392 13.3334 13.4584 10.7142 13.4584 7.50002C13.4584 4.28585 10.8392 1.66669 7.62502 1.66669ZM10.4134 6.15835L7.10585 9.46585C7.02419 9.54752 6.91335 9.59419 6.79669 9.59419C6.68002 9.59419 6.56919 9.54752 6.48752 9.46585L4.83669 7.81502C4.66752 7.64585 4.66752 7.36585 4.83669 7.19669C5.00585 7.02752 5.28585 7.02752 5.45502 7.19669L6.79669 8.53835L9.79502 5.54002C9.96419 5.37085 10.2442 5.37085 10.4134 5.54002C10.5825 5.70919 10.5825 5.98335 10.4134 6.15835Z" fill="#14CC92"/>
                    </svg>
                    <span>Accepted</span>
                </div>
            );
        } else if (status === 'Pending') {
            return (
                <div className="sales__item-status sales__item-status--pending">
                    <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                        <path d="M7.62502 1.66669C4.41085 1.66669 1.79169 4.28585 1.79169 7.50002C1.79169 10.7142 4.41085 13.3334 7.62502 13.3334C10.8392 13.3334 13.4584 10.7142 13.4584 7.50002C13.4584 4.28585 10.8392 1.66669 7.62502 1.66669ZM10.1625 9.58252C10.0809 9.72252 9.93502 9.79835 9.78335 9.79835C9.70752 9.79835 9.63169 9.78085 9.56169 9.73419L7.75335 8.65502C7.30419 8.38669 6.97169 7.79752 6.97169 7.27835V4.88669C6.97169 4.64752 7.17002 4.44919 7.40919 4.44919C7.64835 4.44919 7.84669 4.64752 7.84669 4.88669V7.27835C7.84669 7.48835 8.02169 7.79752 8.20252 7.90252L10.0109 8.98169C10.2209 9.10419 10.2909 9.37252 10.1625 9.58252Z" fill="#FFC759"/>
                    </svg>
                    <span>Pending</span>
                </div>
            );
        } else {
            return (
                <div className="sales__item-status sales__item-status--failed">
                    <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                        <path d="M7.62502 1.66666C4.41085 1.66666 1.79169 4.28582 1.79169 7.49999C1.79169 10.7142 4.41085 13.3333 7.62502 13.3333C10.8392 13.3333 13.4584 10.7142 13.4584 7.49999C13.4584 4.28582 10.8392 1.66666 7.62502 1.66666ZM9.58502 8.84166C9.75419 9.01082 9.75419 9.29082 9.58502 9.45999C9.49752 9.54749 9.38669 9.58832 9.27585 9.58832C9.16502 9.58832 9.05419 9.54749 8.96669 9.45999L7.62502 8.11832L6.28335 9.45999C6.19585 9.54749 6.08502 9.58832 5.97419 9.58832C5.86335 9.58832 5.75252 9.54749 5.66502 9.45999C5.49585 9.29082 5.49585 9.01082 5.66502 8.84166L7.00669 7.49999L5.66502 6.15832C5.49585 5.98916 5.49585 5.70916 5.66502 5.53999C5.83419 5.37082 6.11419 5.37082 6.28335 5.53999L7.62502 6.88166L8.96669 5.53999C9.13585 5.37082 9.41585 5.37082 9.58502 5.53999C9.75419 5.70916 9.75419 5.98916 9.58502 6.15832L8.24335 7.49999L9.58502 8.84166Z" fill="#E03616"/>
                    </svg>
                    <span>Failed</span>
                </div>
            );
        }
    }

    
    return (
        <tr>
            <td className="sales__item sales__item--item">
                <div className={classNames("sales__item-wrapper", `sales__item-wrapper--${itemType}`)}>
                    <img alt={name} className="sales__item-image" src={image}/>
                </div>
                <div className="sales__item-info sales-info">
                    <p className="sales-info__top">
                        <span className="sales-info__top-name">{name}</span>
                        ·
                        <span className="sales-info__top-skin">{skin}</span>
                        {st && (
                            <>
                                ·
                                <span className="sales-info__top-st">ST</span>
                                <svg className="sales-info__top-icon" fill="none" height="15" viewBox="0 0 14 15" width="14">
                                    <path d="M6.43673 2.82469L5.15514 5.42319L2.28777 5.84123C1.77356 5.91581 1.56749 6.54973 1.94038 6.91282L4.01487 8.93431L3.52421 11.7899C3.43589 12.3061 3.97954 12.6927 4.43486 12.4513L7 11.103L9.56514 12.4513C10.0205 12.6907 10.5641 12.3061 10.4758 11.7899L9.98514 8.93431L12.0596 6.91282C12.4325 6.54973 12.2264 5.91581 11.7122 5.84123L8.84486 5.42319L7.56327 2.82469C7.33365 2.36151 6.66832 2.35563 6.43673 2.82469Z" fill="#FFC759"/>
                                </svg>
                            </>

                        )}
                    </p>
                    <p className="sales-info__bottom">
                        <span className="sales-info__bottom-type">{type}</span>
                        ·
                        <span className="sales-info__bottom-float">{float}</span>
                    </p>
                </div>   
            </td>
            <td className="sales__item">{days}</td>
            <td className="sales__item">{bought}</td>
            <td className="sales__item">{sold}</td>
            <td className={classNames("sales__item", Number(profit) < 10 ? "sales__item--bad" : (Number(profit) >= 20 ? "sales__item--good" : "sales__item--average"))}>{`$${profit}`}</td>
            <td className="sales__item">
                <svg className="sales__item-icon" fill="none" height="21" viewBox="0 0 21 21" width="21">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" fill="#079CDC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.435 5.91475C11.7928 5.43056 9.61078 3.89729 4.97104 4.90601C4.97104 4.90601 5.77794 5.30951 5.97968 5.713C5.97968 5.713 3.35721 7.43538 3.35721 11.1601C3.35721 13.9318 4.93783 16.2246 7.51705 17.18C10.0963 18.1353 13.292 17.4666 14.617 16.5266C15.5699 15.8505 17.6429 13.9318 17.6429 10.9584C17.6429 7.73044 15.8644 5.30951 15.4609 4.90601C15.4609 4.90601 16.6713 8.97349 15.4609 11.4479C14.2506 13.9222 12.8385 14.1863 12.8385 14.1863C12.8385 14.1863 13.6084 14.9933 14.2506 15.1951C14.2506 15.1951 10.8212 17.4143 6.98831 14.9933C6.98831 14.9933 6.74957 11.483 8.96857 9.46549C8.96857 9.46549 9.57378 9.86896 9.9772 10.676C9.9772 10.7428 12.0501 9.46549 12.435 5.91475Z" fill="white"/>
                </svg>
                <span className="sales__item-text">{marketplace}</span>
            </td>
            <td className="sales__item">
                <svg className="sales__item-icon sales__item-icon--account" fill="none" height="17" viewBox="0 0 17 17" width="17">
                    <path d="M8.98152 7.74616C8.91486 7.73949 8.83486 7.73949 8.76152 7.74616C7.17486 7.69283 5.91486 6.39283 5.91486 4.79282C5.91486 3.15949 7.23486 1.83282 8.87486 1.83282C10.5082 1.83282 11.8349 3.15949 11.8349 4.79282C11.8282 6.39283 10.5682 7.69283 8.98152 7.74616Z" fill="#F8F0FB"/>
                    <path d="M5.64829 10.2072C4.03496 11.2872 4.03496 13.0472 5.64829 14.1205C7.48163 15.3472 10.4883 15.3472 12.3216 14.1205C13.935 13.0405 13.935 11.2805 12.3216 10.2072C10.495 8.98718 7.48829 8.98718 5.64829 10.2072Z" fill="#F8F0FB"/>
                </svg>
                <span className="sales__item-bold">{account}</span>
            </td>
            <td className="sales__item">
                <span className="sales__item-bold">{time}</span>
                <span className="sales__item-text">{`/ ${date}`}</span>
            </td>
            <td className="sales__item sales__item--status">
                {getStatus()}
            </td>
        </tr>
    );
}