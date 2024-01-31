import {useContext, useEffect, useState, useReducer} from "react";
import classNames from "classnames";

import {AsideMenu, Header, OverviewWidget, OverviewRequestsItem} from "../../components";
import {appContext} from "../../services";

import "./Overview.style.scss";


export default function Overview() {
    const [openFilters, setOpenFilters] = useReducer(prev => !prev, false);
    const [currentFilter, setCurrentFilter] = useState('1 minute');
    const {theme} = useContext(appContext);


    useEffect(() => {}, []) // Здесь апи запрос на получение предметов и верхних виджетов (requestsItems, overviewWidgets)

    useEffect(() => {}, [currentFilter]) // Здесь апи запрос на изменение фильтра (requestsItems с текущим фильтром '1 минута', '15', '60')


    const overviewWidgets = [
        {
            'title': 'Balances',
            'value': '$11 361.24',
            'increase': '+4.4%',
            'tm': '$3 821.35',
            'shadowpay': '$11 361.24',
            'waxpeer': '$3 821.35',
        },
        {
            'title': 'Volume',
            'value': '$3 821.35',
            'increase': '+4.4%',
            'tm': '$3 821.35',
            'shadowpay': '$11 361.24',
            'waxpeer': '$3 821.35',
        },
        {
            'title': 'Items sold',
            'value': '7 313',
            'increase': '+4.4%',
            'tm': '$3 821.35',
            'shadowpay': '$11 361.24',
            'waxpeer': '$3 821.35',
        },
    ]

    const requestsItems = [
        {
            'name': 'csgotm.oneSell',
            'quality': '1069/0',
            'percents': '100%',
            'time': '0.48',
            'errors': [
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
            ],
            'proxy': '45.45.45.45',
        },
        {
            'name': 'csgotm.oneSell',
            'quality': '1069/0',
            'percents': '100%',
            'time': '0.48',
            'errors': [
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
            ],
            'proxy': '45.45.45.45',
        },
        {
            'name': 'csgotm.oneSell',
            'quality': '1069/0',
            'percents': '100%',
            'time': '2.55',
            'errors': [
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
            ],
            'proxy': '45.45.45.45',
        },
        {
            'name': 'csgotm.oneSell',
            'quality': '1069/0',
            'percents': '100%',
            'time': '4.48',
            'errors': [
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
                {
                    'amount': 'x308',
                    'name': 'HTTP502',
                },
            ],
            'proxy': '45.45.45.45',
        },
    ]


    return (
        <>
            <AsideMenu activePage='dashboard/overview'/>
            <div className="content">
                <Header title='Overview'/>
                <div className="content__widgets">
                    {overviewWidgets.map((item, index) => (<OverviewWidget {...item} key={index}/>))}
                </div>
                <div className="content__requests">
                    <div className="content__requests-top requests-top">
                        <h3 className="requests-top__title">Application Requests</h3>
                        <div className="requests-top__filter" onClick={setOpenFilters}>
                            <div className="requests-top__filter-left">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                                    <path d="M10.0001 1.66669C5.40841 1.66669 1.66675 5.40835 1.66675 10C1.66675 14.5917 5.40841 18.3334 10.0001 18.3334C14.5917 18.3334 18.3334 14.5917 18.3334 10C18.3334 5.40835 14.5917 1.66669 10.0001 1.66669ZM13.6251 12.975C13.5084 13.175 13.3001 13.2834 13.0834 13.2834C12.9751 13.2834 12.8667 13.2584 12.7667 13.1917L10.1834 11.65C9.54175 11.2667 9.06675 10.425 9.06675 9.68335V6.26669C9.06675 5.92502 9.35008 5.64169 9.69175 5.64169C10.0334 5.64169 10.3167 5.92502 10.3167 6.26669V9.68335C10.3167 9.98335 10.5667 10.425 10.8251 10.575L13.4084 12.1167C13.7084 12.2917 13.8084 12.675 13.6251 12.975Z" fill="#A9A5B0"/>
                                </svg>
                                <span>1 minute</span>
                            </div>
                            <svg className="requests-top__filter-icon" fill="none" height="6" viewBox="0 0 8 6" width="8">
                                <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="#FFFCEF" fillOpacity="0.75"/>
                            </svg>
                            <ul className={classNames("requests-top__filter-content requests-filters", openFilters && "active")}>
                                <li className="requests-filters__el" onClick={() => setCurrentFilter('1 minute')}>
                                    <input className={classNames("requests-filters__el-input", theme === 'light' && 'light')} defaultChecked id="1_minute" name="timeFilter" type="radio"/>
                                    <label className="requests-filters__el-label" htmlFor="1_minute">1 minute</label>
                                </li>
                                <li className="requests-filters__el" onClick={() => setCurrentFilter('15 minutes')}>
                                    <input className={classNames("requests-filters__el-input", theme === 'light' && 'light')} id="15_minutes" name="timeFilter" type="radio"/>
                                    <label className="requests-filters__el-label" htmlFor="15_minutes">15 minutes</label>
                                </li>
                                <li className="requests-filters__el" onClick={() => setCurrentFilter('60 minutes')}>
                                    <input className={classNames("requests-filters__el-input", theme === 'light' && 'light')} id="60_minutes" name="timeFilter" type="radio"/>
                                    <label className="requests-filters__el-label" htmlFor="60_minutes">60 minutes</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <table className="content__requests-table requests-table">
                        <thead>
                            <tr>
                                <td className="requests-table__header requests-table__header--name">Request name</td>
                                <td className="requests-table__header">
                                    <span className="requests-table__header-good">Good</span>
                                    /
                                    <span className="requests-table__header-bad">Bad</span>
                                </td>
                                <td className="requests-table__header">
                                    <span className="requests-table__header-text">Avg Time (s)</span>
                                    <svg className="requests-table__header-icon" fill="none" height="14" viewBox="0 0 13 14" width="13">
                                        <path d="M5.49407 0.872872C5.89284 0.41241 6.60716 0.41241 7.00593 0.872872L10.0132 4.34535C10.5741 4.99299 10.114 6 9.25725 6L3.24275 6C2.386 6 1.92594 4.99299 2.48682 4.34535L5.49407 0.872872Z" fill="#8075FF"/>
                                        <path d="M7.00593 13.1271C6.60716 13.5876 5.89284 13.5876 5.49407 13.1271L2.48682 9.65465C1.92594 9.00701 2.386 8 3.24275 8H9.25725C10.114 8 10.5741 9.00701 10.0132 9.65465L7.00593 13.1271Z" fill="#5B5A65"/>
                                    </svg>
                                </td>
                                <td className="requests-table__header requests-table__header--errors">Errors</td>
                                <td className="requests-table__header requests-table__header--proxys">Proxys</td>
                            </tr>
                        </thead>
                        <tbody>
                            {requestsItems.map((item, index) => <OverviewRequestsItem {...item} key={index}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}