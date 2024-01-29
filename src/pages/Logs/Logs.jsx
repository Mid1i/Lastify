import {useContext, useReducer} from "react";
import classNames from "classnames";

import {AsideMenu, Header, LogsItem} from "../../components";
import {appContext} from "../../services";

import "./Logs.style.scss";


export default function Logs() {
    const [openAccounts, setOpenAccounts] = useReducer(prev => !prev, false);
    const {theme} = useContext(appContext);

    const accounts = ['Account #1', 'Account #2', 'Account #3', 'Account #4', 'Account #5', 'Account #5'];


    return (
        <>
            <AsideMenu activePage='logs'/>
            <div className="content">
                <Header title='Logs'/>
                <div className="content__logs">
                    <div className="content__logs-top logs-top">
                        <div className="logs-top__search">
                            <input className="logs-top__search-input" placeholder="Username" name="search" type="text"/>
                            <svg className="logs-top__search-icon" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <path d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58335C17.5003 5.2111 13.9559 1.66669 9.58366 1.66669C5.2114 1.66669 1.66699 5.2111 1.66699 9.58335C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z" stroke="#A9A5B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.3337 18.3334L16.667 16.6667" stroke="#A9A5B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={classNames("logs-top__accounts", openAccounts && "active")}>
                            <p className="logs-top__accounts-text" onClick={setOpenAccounts}>All accounts</p>
                            <svg className="logs-top__accounts-icon" fill="none" onClick={setOpenAccounts} height="6" viewBox="0 0 8 6" width="8">
                                <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="#FFFCEF" fill-opacity="0.75"/>
                            </svg>
                            <div className={classNames("logs-top__accounts-content logs-accounts", openAccounts && "active")}>
                                <input className="logs-accounts__search" placeholder="Profile Name" name="searchAccounts" type="text"/>
                                <svg className="logs-accounts__icon" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                    <path d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58335C17.5003 5.2111 13.9559 1.66669 9.58366 1.66669C5.2114 1.66669 1.66699 5.2111 1.66699 9.58335C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z" stroke="#A9A5B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.3337 18.3334L16.667 16.6667" stroke="#A9A5B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <ul className="logs-accounts__items">
                                    {accounts.map((account, index) => (
                                        <li className="logs-accounts__items-el">
                                            <input className={classNames(theme === 'light' && 'light')} id={account} type="checkbox"/>
                                            <label htmlFor={account}>
                                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                                                    <path d="M8.10671 7.24616C8.04004 7.23949 7.96004 7.23949 7.88671 7.24616C6.30004 7.19283 5.04004 5.89283 5.04004 4.29282C5.04004 2.65949 6.36004 1.33282 8.00004 1.33282C9.63337 1.33282 10.96 2.65949 10.96 4.29282C10.9534 5.89283 9.69337 7.19283 8.10671 7.24616Z" fill="#A9A5B0"/>
                                                    <path d="M4.77348 9.70718C3.16014 10.7872 3.16014 12.5472 4.77348 13.6205C6.60681 14.8472 9.61348 14.8472 11.4468 13.6205C13.0601 12.5405 13.0601 10.7805 11.4468 9.70718C9.62014 8.48718 6.61348 8.48718 4.77348 9.70718Z" fill="#A9A5B0"/>
                                                </svg>
                                                <span>{account}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content__logs-items logs">
                        {[...Array(10)].map((item, index) => (<LogsItem key={index}/>))}
                    </div>
                </div>
            </div>
        </>
    );
}