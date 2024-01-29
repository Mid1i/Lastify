import {useNavigate} from "react-router-dom";
import {useContext, useReducer} from "react";
import classNames from "classnames";

import {appContext} from "../../services";

import "./AsideMenu.style.scss";


export default function AsideMenu({activePage}) {
    const [openDashboard, setOpenDashboard] = useReducer(prev => !prev, true);
    const [openPrices, setOpenPrices] = useReducer(prev => !prev, false);
    const {openMenu, setOpenMenu} = useContext(appContext);

    const navigate = useNavigate();


    return (
        <aside className={classNames("nav-menu", !openMenu && "small")}>
            <div className="nav-menu__title">
                <h1 className="nav-menu__title-name">Lastify</h1>
                <svg className={classNames("nav-menu__title-icon", !openMenu && "rotated")} fill="none" onClick={setOpenMenu} height="28" viewBox="0 0 28 28" width="28">
                    <path d="M10.5 25.6666H17.5C23.3333 25.6666 25.6666 23.3333 25.6666 17.5V10.5C25.6666 4.66665 23.3333 2.33331 17.5 2.33331H10.5C4.66665 2.33331 2.33331 4.66665 2.33331 10.5V17.5C2.33331 23.3333 4.66665 25.6666 10.5 25.6666Z" fill="#1F2231"/>
                    <path d="M15.47 18.1183L11.3633 14L15.47 9.88165" stroke="#F8F0FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <ul className={classNames("nav-menu__list", !openMenu && "small")}>
                <li className="nav-menu__list-el nav-el" onClick={setOpenDashboard}>
                    <span className="nav-el__page">
                        <svg className={classNames("nav-el__page-icon", activePage.includes('dashboard') && "active")} fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M18.3333 9.08268V3.41602C18.3333 2.16602 17.8 1.66602 16.475 1.66602H13.1083C11.7833 1.66602 11.25 2.16602 11.25 3.41602V9.08268C11.25 10.3327 11.7833 10.8327 13.1083 10.8327H16.475C17.8 10.8327 18.3333 10.3327 18.3333 9.08268Z" fill="#A9A5B0"/>
                            <path d="M18.3333 16.584V15.084C18.3333 13.834 17.8 13.334 16.475 13.334H13.1083C11.7833 13.334 11.25 13.834 11.25 15.084V16.584C11.25 17.834 11.7833 18.334 13.1083 18.334H16.475C17.8 18.334 18.3333 17.834 18.3333 16.584Z" fill="#A9A5B0"/>
                            <path d="M8.74984 10.916V16.5827C8.74984 17.8327 8.2165 18.3327 6.8915 18.3327H3.52484C2.19984 18.3327 1.6665 17.8327 1.6665 16.5827V10.916C1.6665 9.66602 2.19984 9.16602 3.52484 9.16602H6.8915C8.2165 9.16602 8.74984 9.66602 8.74984 10.916Z" fill="#A9A5B0"/>
                            <path d="M8.74984 3.41602V4.91602C8.74984 6.16602 8.2165 6.66602 6.8915 6.66602H3.52484C2.19984 6.66602 1.6665 6.16602 1.6665 4.91602V3.41602C1.6665 2.16602 2.19984 1.66602 3.52484 1.66602H6.8915C8.2165 1.66602 8.74984 2.16602 8.74984 3.41602Z" fill="#A9A5B0"/>
                        </svg>
                        <span className={classNames("nav-el__page-text", activePage.includes('dashboard') && "active", !openMenu && "small")}>Dashboard</span>
                    </span>
                    <svg className={classNames("nav-el__icon", openDashboard && "rotated", activePage.includes('dashboard') && "active", !openMenu && "small")} fill="none" height="6" viewBox="0 0 8 6" width="8">
                        <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="#A9A5B0"/>
                    </svg>
                </li>
                <li className={classNames("nav-menu__list-el nav-subel", activePage.includes('overview') && "active", !openDashboard && "hidden", !openMenu && "small")} onClick={() => navigate('/')}>Overview</li>
                <li className={classNames("nav-menu__list-el nav-subel", activePage.includes('sales') && "active", !openDashboard && "hidden", !openMenu && "small")} onClick={() => navigate('/dashboard/sales')}>Sales</li>
                <li className="nav-menu__list-el nav-el" onClick={setOpenPrices}>
                    <span className="nav-el__page">
                        <svg className={classNames("nav-el__page-icon", activePage.includes('prices') && "active")} fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M18.2667 13.9591C17.9917 16.1758 16.175 17.9925 13.9584 18.2675C12.6167 18.4341 11.3667 18.0675 10.3917 17.3508C9.83338 16.9425 9.96671 16.0758 10.6334 15.8758C13.1417 15.1175 15.1167 13.1341 15.8834 10.6258C16.0834 9.96748 16.95 9.83415 17.3584 10.3841C18.0667 11.3675 18.4334 12.6175 18.2667 13.9591Z" fill="#A9A5B0"/>
                            <path d="M8.32484 1.66602C4.64984 1.66602 1.6665 4.64935 1.6665 8.32435C1.6665 11.9993 4.64984 14.9827 8.32484 14.9827C11.9998 14.9827 14.9832 11.9993 14.9832 8.32435C14.9748 4.64935 11.9998 1.66602 8.32484 1.66602ZM7.5415 7.39102L9.54984 8.09102C10.2748 8.34935 10.6248 8.85768 10.6248 9.64102C10.6248 10.541 9.90817 11.2827 9.03317 11.2827H8.95817V11.3243C8.95817 11.666 8.67484 11.9493 8.33317 11.9493C7.9915 11.9493 7.70817 11.666 7.70817 11.3243V11.2743C6.78317 11.2327 6.0415 10.4577 6.0415 9.49102C6.0415 9.14935 6.32484 8.86602 6.6665 8.86602C7.00817 8.86602 7.2915 9.14935 7.2915 9.49102C7.2915 9.79102 7.50817 10.0327 7.77484 10.0327H9.02484C9.2165 10.0327 9.3665 9.85768 9.3665 9.64102C9.3665 9.34935 9.3165 9.33268 9.12484 9.26602L7.1165 8.56602C6.39984 8.31602 6.0415 7.80768 6.0415 7.01602C6.0415 6.11602 6.75817 5.37435 7.63317 5.37435H7.70817V5.34102C7.70817 4.99935 7.9915 4.71602 8.33317 4.71602C8.67484 4.71602 8.95817 4.99935 8.95817 5.34102V5.39102C9.88317 5.43268 10.6248 6.20768 10.6248 7.17435C10.6248 7.51602 10.3415 7.79935 9.99984 7.79935C9.65817 7.79935 9.37484 7.51602 9.37484 7.17435C9.37484 6.87435 9.15817 6.63268 8.8915 6.63268H7.6415C7.44984 6.63268 7.29984 6.80768 7.29984 7.02435C7.2915 7.30768 7.3415 7.32435 7.5415 7.39102Z" fill="#A9A5B0"/>
                        </svg>
                        <span className={classNames("nav-el__page-text", activePage.includes('prices') && "active", !openMenu && "small")}>Prices</span>
                    </span>
                    <svg className={classNames("nav-el__icon", openPrices && "rotated", activePage.includes('prices') && "active")} fill="none" height="6" viewBox="0 0 8 6" width="8">
                        <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="#A9A5B0"/>
                    </svg>
                </li>
                <li className={classNames("nav-menu__list-el nav-subel", activePage.includes('common') && "active", !openPrices && "hidden", !openMenu && "small")} onClick={() => navigate('/prices/common')}>Common</li>
                <li className={classNames("nav-menu__list-el nav-subel", activePage.includes('rare') && "active", !openPrices && "hidden", !openMenu && "small")} onClick={() => navigate('/prices/rare')}>Rare</li>
                <li className={classNames("nav-menu__list-el nav-el", activePage.includes('accounts') && "active")}>
                    <span className="nav-el__page" onClick={() => navigate('/accounts')}>
                        <svg className={classNames("nav-el__page-icon", activePage.includes('accounts') && "active")} fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M10.1331 9.05768C10.0498 9.04935 9.94981 9.04935 9.85814 9.05768C7.8748 8.99102 6.2998 7.36602 6.2998 5.36602C6.2998 3.32435 7.9498 1.66602 9.99981 1.66602C12.0415 1.66602 13.6998 3.32435 13.6998 5.36602C13.6915 7.36602 12.1165 8.99102 10.1331 9.05768Z" fill="#A9A5B0"/>
                            <path d="M5.9666 12.134C3.94993 13.484 3.94993 15.684 5.9666 17.0257C8.25827 18.559 12.0166 18.559 14.3083 17.0257C16.3249 15.6757 16.3249 13.4757 14.3083 12.134C12.0249 10.609 8.2666 10.609 5.9666 12.134Z" fill="#A9A5B0"/>
                        </svg>
                        <span className={classNames("nav-el__page-text", activePage.includes('accounts') && "active", !openMenu && "small")}>Steam accounts</span>
                    </span>
                </li>
                <li className={classNames("nav-menu__list-el nav-el", activePage.includes('logs') && "active")}>
                    <span className="nav-el__page" onClick={() => navigate('/logs')}>
                        <svg className={classNames("nav-el__page-icon", activePage.includes('logs') && "active")} fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M13.1667 1.84164C12.825 1.49997 12.2333 1.73331 12.2333 2.20831V5.11664C12.2333 6.33331 13.2667 7.34164 14.525 7.34164C15.3167 7.34997 16.4167 7.34997 17.3583 7.34997C17.8333 7.34997 18.0833 6.79164 17.75 6.45831C16.55 5.24997 14.4 3.07497 13.1667 1.84164Z" fill="#A9A5B0"/>
                            <path d="M17.0833 8.49169H14.675C12.7 8.49169 11.0916 6.88335 11.0916 4.90835V2.50002C11.0916 2.04169 10.7166 1.66669 10.2583 1.66669H6.72498C4.15831 1.66669 2.08331 3.33335 2.08331 6.30835V13.6917C2.08331 16.6667 4.15831 18.3334 6.72498 18.3334H13.275C15.8416 18.3334 17.9166 16.6667 17.9166 13.6917V9.32502C17.9166 8.86669 17.5416 8.49169 17.0833 8.49169ZM9.58331 14.7917H6.24998C5.90831 14.7917 5.62498 14.5084 5.62498 14.1667C5.62498 13.825 5.90831 13.5417 6.24998 13.5417H9.58331C9.92498 13.5417 10.2083 13.825 10.2083 14.1667C10.2083 14.5084 9.92498 14.7917 9.58331 14.7917ZM11.25 11.4584H6.24998C5.90831 11.4584 5.62498 11.175 5.62498 10.8334C5.62498 10.4917 5.90831 10.2084 6.24998 10.2084H11.25C11.5916 10.2084 11.875 10.4917 11.875 10.8334C11.875 11.175 11.5916 11.4584 11.25 11.4584Z" fill="#A9A5B0"/>
                        </svg>
                        <span className={classNames("nav-el__page-text", activePage.includes('logs') && "active", !openMenu && "small")}>Logs</span>
                    </span>
                </li>
                <li className={classNames("nav-menu__list-el nav-el", activePage.includes('feedback') && "active")}>
                    <span className="nav-el__page" onClick={() => navigate('/feedback')}>
                        <svg className={classNames("nav-el__page-icon", activePage.includes('feedback') && "active")} fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65834 14.0917 6.73334L16.75 7.17501C18.45 7.45834 18.85 8.69168 17.625 9.90834L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63332 16.05 9.17499 16.3167L6.68332 17.7917C4.89999 18.85 3.81665 18.0583 4.28332 16.0417L4.87499 13.4833C4.98332 13 4.79165 12.325 4.44165 11.975L2.37499 9.90834C1.15832 8.69168 1.54999 7.45834 3.24999 7.17501L5.90832 6.73334C6.34999 6.65834 6.88332 6.26668 7.08332 5.85835L8.54999 2.92501C9.34999 1.33335 10.65 1.33335 11.4417 2.92501Z" fill="#A9A5B0"/>
                        </svg>
                        <span className={classNames("nav-el__page-text", activePage.includes('feedback') && "active", !openMenu && "small")}>Feedback</span>
                    </span>
                </li>
            </ul>
            <div className={classNames("nav-menu__settings", !openMenu && "small", activePage.includes('settings') && "active")} onClick={() => navigate('/settings')}>
                <svg className={classNames("nav-menu__settings-icon", activePage.includes('settings') && "active")} fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.66663 9.26669V10.7334C1.66663 11.6 2.37496 12.3167 3.24996 12.3167C4.75829 12.3167 5.37496 13.3834 4.61663 14.6917C4.18329 15.4417 4.44163 16.4167 5.19996 16.85L6.64163 17.675C7.29996 18.0667 8.14996 17.8334 8.54163 17.175L8.63329 17.0167C9.39163 15.7084 10.625 15.7084 11.375 17.0167L11.4666 17.175C11.8583 17.8334 12.7083 18.0667 13.3666 17.675L14.8083 16.85C15.5666 16.4167 15.825 15.45 15.3916 14.6917C14.6333 13.3834 15.25 12.3167 16.7583 12.3167C17.6333 12.3167 18.3416 11.6 18.3416 10.7334V9.26669C18.3416 8.39169 17.625 7.68336 16.7583 7.68336C15.25 7.68336 14.6333 6.61669 15.3916 5.30836C15.825 4.55836 15.5666 3.58336 14.8083 3.15003L13.3666 2.32503C12.7083 1.93336 11.8583 2.1667 11.4666 2.82503L11.375 2.98336C10.6166 4.29169 9.38329 4.29169 8.63329 2.98336L8.54163 2.82503C8.14996 2.1667 7.29996 1.93336 6.64163 2.32503L5.19996 3.15003C4.44163 3.58336 4.18329 4.55836 4.61663 5.30836C5.37496 6.61669 4.75829 7.68336 3.24996 7.68336C2.37496 7.68336 1.66663 8.40003 1.66663 9.26669ZM12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61932 8.61929 7.50003 10 7.50003C11.3807 7.50003 12.5 8.61932 12.5 10Z" fill="#A9A5B0"/>
                </svg>
                <p className={classNames("nav-menu__settings-text", activePage.includes('settings') && "active")}>Settings</p>
            </div>
            <p className="nav-menu__text">v. 0.1.1</p>
        </aside>
    );
} 