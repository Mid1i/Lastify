import classNames from "classnames";
import {useEffect, useReducer} from "react";

import {AsideMenu, Header, RareItem} from "../../components";

import "./Rare.style.scss";

import image1 from "../../assets/images/skins/1.png";
import image2 from "../../assets/images/skins/2.png";
import image3 from "../../assets/images/skins/3.png";
import image4 from "../../assets/images/skins/4.png";


export default function Rare() {
    const [openRare, setOpenRare] = useReducer(prev => !prev, false);
    const [openPrice, setOpenPrice] = useReducer(prev => !prev, false);


    useEffect(() => {}, []) // Апи запрос на получение предметов (rareItems)


    const rareItems = [
        {
            'image': image1,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'knives',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image2,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'pistols',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image3,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'heavy',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image4,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'rifles',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image1,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'knives',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image1,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'knives',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image1,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'knives',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
        {
            'image': image1,
            'name': 'USP-S',
            'skin': 'Overgrowty',
            'float': '0.071',
            'quality': 'FN',
            'type': 'knives',
            'number': '23x',
            'minLimit': '511',
            'minLimitDays': '5',
            'maxLimit': '511',
            'maxLimitDays': '5',
            'bought': '3 921.35',
            'boughtFloat': '0.071',
            'boughtDays': '5',
            'price': '3921.35',
            'sales': '23',
        },
    ]


    return (
        <>
            <AsideMenu activePage='prices/rare'/>
            <div className="content">
                <Header title='Rare'/>
                <div className="content__rare">
                    <div className="content__rare-top rare-top">
                        <div className="rare-top__search">
                            <input className="rare-top__search-input" placeholder="Username" name="search" type="text"/>
                            <svg className="rare-top__search-icon" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <path d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58335C17.5003 5.2111 13.9559 1.66669 9.58366 1.66669C5.2114 1.66669 1.66699 5.2111 1.66699 9.58335C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z" stroke="#A9A5B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.3337 18.3334L16.667 16.6667" stroke="#A9A5B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="rare-top__right">
                            <div className="rare-top__right-fight">
                                <span>Disable fight</span>
                                <span className="active">Enable fight</span>
                            </div>
                            <div className={classNames("rare-top__right-item rare-filter", openRare && "active")} onClick={setOpenRare}>
                                <p className="rare-filter__title">Weekly rare</p>
                                <svg className="rare-filter__icon" fill="none" height="6" viewBox="0 0 8 6" width="8">
                                    <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="#FFFCEF" fillOpacity="0.75"/>
                                </svg>
                                <ul className={classNames("rare-filter__list", openRare && "active")}>
                                    <li className="rare-filter__list-el">
                                        <p>Weekly rare</p>
                                    </li>
                                    <li className="rare-filter__list-el">
                                        <p>Monthly rare</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={classNames("rare-top__right-item rare-filter", openPrice && "active")} onClick={setOpenPrice}>
                                <p className="rare-filter__title">Your TM Price</p>
                                <svg className="rare-filter__icon" fill="none" height="6" viewBox="0 0 8 6" width="8">
                                    <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="#FFFCEF" fillOpacity="0.75"/>
                                </svg>
                                <ul className={classNames("rare-filter__list", openPrice && "active")}>
                                    <li className="rare-filter__list-el">
                                        <p>Your TM Price</p>
                                    </li>
                                    <li className="rare-filter__list-el">
                                        <p>Your WaxPeer Price</p>
                                    </li>
                                    <li className="rare-filter__list-el">
                                        <p>Your ShadowPay Price</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <table className="content__rare-items rare">
                        <thead>
                            <tr>
                                <td className="rare__header rare__header--item">Item</td>
                                <td className="rare__header rare__header--number">Number</td>
                                <td className="rare__header rare__header--limit">
                                    <span className="rare__header-text">Min Limit</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="rare__header rare__header--limit">
                                    <span className="rare__header-text">Max limit</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="rare__header rare__header--bought">
                                    <span className="rare__header-text">Bought, Flot, Days</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="rare__header">
                                    <span className="rare__header-text">Your TM Price</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="rare__header">
                                    <span className="rare__header-text">Min Price</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="rare__header">
                                    <span className="rare__header-text">Order Price</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="rare__header">
                                    <span className="rare__header-text">Weelky Rare</span>
                                    <svg className="rare__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {rareItems.map((item, index) => (<RareItem {...item} key={index}/>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}