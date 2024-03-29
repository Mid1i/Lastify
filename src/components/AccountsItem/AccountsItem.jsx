import classNames from "classnames";

import "./AccountsItem.style.scss";


export default function AccountsItem({number, image, name, id, host, country, ping, guard, time, status}) { 
    return (
        <tr>
            <td className="accounts__item accounts__item--number">{`#${number}`}</td>
            <td className="accounts__item">
                <img alt="account" className="accounts__item-image" src={image}/>
                <span className="accounts__item-name">{name}</span>
                <svg className="accounts__item-icon" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M7.58301 6.91669L12.3663 2.13336" stroke="#5B5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.8332 4.46669V1.66669H10.0332" stroke="#5B5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.41699 1.66669H5.25033C2.33366 1.66669 1.16699 2.83335 1.16699 5.75002V9.25002C1.16699 12.1667 2.33366 13.3334 5.25033 13.3334H8.75033C11.667 13.3334 12.8337 12.1667 12.8337 9.25002V8.08335" stroke="#5B5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </td>
            <td className="accounts__item">{'*'.repeat(id.length)}</td>
            <td className="accounts__item accounts__item--host">
                <span className="accounts__item-row accounts__item-bold">{host}</span>
                <span className="accounts__item-row accounts__item-bold">
                    {country.slice(0, 2).toUpperCase()}
                    <span className="accounts__item-country">{`/ ${country}`}</span>
                    <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                        <path d="M7.7998 14.5C11.6658 14.5 14.7998 11.366 14.7998 7.5C14.7998 3.63401 11.6658 0.5 7.7998 0.5C3.93381 0.5 0.799805 3.63401 0.799805 7.5C0.799805 11.366 3.93381 14.5 7.7998 14.5Z" fill="#F0F0F0"/>
                        <path d="M14.3644 5.06525H1.2352C0.953805 5.82357 0.799805 6.64377 0.799805 7.50002C0.799805 8.35626 0.953805 9.17646 1.2352 9.93479H14.3644C14.6458 9.17646 14.7998 8.35626 14.7998 7.50002C14.7998 6.64377 14.6458 5.82357 14.3644 5.06525Z" fill="#0052B4"/>
                        <path d="M7.79952 0.5C5.67789 0.5 3.77687 1.44402 2.49316 2.93477H13.1058C11.8222 1.44402 9.92115 0.5 7.79952 0.5Z" fill="#D80027"/>
                        <path d="M13.1059 12.0652H2.49316C3.77687 13.556 5.67789 14.5 7.79952 14.5C9.92115 14.5 11.8222 13.556 13.1059 12.0652Z" fill="#D80027"/>
                        <defs>
                            <rect width="14" height="14" fill="white" transform="translate(0.799805 0.5)"/>
                        </defs>
                    </svg>
                </span>
            </td>
            <td className="accounts__item">
                <svg className="accounts__item-ping" fill="none" height="17" viewBox="0 0 17 17" width="17">
                    <path d="M2.59961 15.1667H14.5996" stroke="#14CC92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.33293 6.08667H3.26628C2.89961 6.08667 2.59961 6.38667 2.59961 6.75334V12.5C2.59961 12.8667 2.89961 13.1667 3.26628 13.1667H4.33293C4.69959 13.1667 4.99959 12.8667 4.99959 12.5V6.75334C4.99959 6.38667 4.69959 6.08667 4.33293 6.08667Z" fill="#14CC92"/>
                    <path d="M9.13273 3.95996H8.06608C7.69941 3.95996 7.39941 4.25996 7.39941 4.62663V12.5C7.39941 12.8666 7.69941 13.1666 8.06608 13.1666H9.13273C9.4994 13.1666 9.7994 12.8666 9.7994 12.5V4.62663C9.7994 4.25996 9.4994 3.95996 9.13273 3.95996Z" fill="#14CC92"/>
                    <path d="M13.9325 1.83331H12.8659C12.4992 1.83331 12.1992 2.13331 12.1992 2.49998V12.5C12.1992 12.8666 12.4992 13.1666 12.8659 13.1666H13.9325C14.2992 13.1666 14.5992 12.8666 14.5992 12.5V2.49998C14.5992 2.13331 14.2992 1.83331 13.9325 1.83331Z" fill="#14CC92"/>
                </svg>
                <span className="accounts__item-text accounts__item-ping">{`${ping} ms`}</span>
                <ul className="accounts__item-list accounts-list">
                    <li className="accounts-list__el">
                        <svg className="accounts-list__el-market" fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9352 5.41475C11.293 4.93056 9.111 3.39729 4.47125 4.40601C4.47125 4.40601 5.27815 4.80951 5.47989 5.213C5.47989 5.213 2.85742 6.93538 2.85742 10.6601C2.85742 13.4318 4.43805 15.7246 7.01726 16.68C9.59652 17.6353 12.7922 16.9666 14.1172 16.0266C15.0701 15.3505 17.1432 13.4318 17.1432 10.4584C17.1432 7.23044 15.3646 4.80951 14.9612 4.40601C14.9612 4.40601 16.1715 8.47349 14.9612 10.9479C13.7508 13.4222 12.3387 13.6863 12.3387 13.6863C12.3387 13.6863 13.1086 14.4933 13.7508 14.6951C13.7508 14.6951 10.3214 16.9143 6.48852 14.4933C6.48852 14.4933 6.24978 10.983 8.46878 8.96549C8.46878 8.96549 9.074 9.36896 9.47742 10.176C9.47742 10.2428 11.5504 8.96549 11.9352 5.41475Z" fill="#A9A5B0"/>
                        </svg>
                        <span className="accounts-list__el-ping">87 ms</span>
                        <svg className="accounts-list__el-icon" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M2.375 14.6667H14.375" stroke="#14CC92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.10832 5.58667H3.04167C2.675 5.58667 2.375 5.88667 2.375 6.25334V12C2.375 12.3667 2.675 12.6667 3.04167 12.6667H4.10832C4.47498 12.6667 4.77498 12.3667 4.77498 12V6.25334C4.77498 5.88667 4.47498 5.58667 4.10832 5.58667Z" fill="#14CC92"/>
                            <path d="M8.90812 3.45996H7.84147C7.4748 3.45996 7.1748 3.75996 7.1748 4.12663V12C7.1748 12.3666 7.4748 12.6666 7.84147 12.6666H8.90812C9.27479 12.6666 9.57479 12.3666 9.57479 12V4.12663C9.57479 3.75996 9.27479 3.45996 8.90812 3.45996Z" fill="#14CC92"/>
                            <path d="M13.7079 1.33331H12.6413C12.2746 1.33331 11.9746 1.63331 11.9746 1.99998V12C11.9746 12.3666 12.2746 12.6666 12.6413 12.6666H13.7079C14.0746 12.6666 14.3746 12.3666 14.3746 12V1.99998C14.3746 1.63331 14.0746 1.33331 13.7079 1.33331Z" fill="#14CC92"/>
                        </svg>
                    </li>
                    <li className="accounts-list__el">
                        <svg className="accounts-list__el-market" fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M11.1297 3.46564C11.1297 3.46564 11.1269 3.66531 11.1297 3.79833V4.07054H13.0348H14.9541L14.9399 4.16128C14.9313 4.20662 14.9085 4.31254 14.883 4.40324C14.8289 4.62394 14.7152 5.02036 14.6555 5.3106C14.6157 5.51014 14.6015 5.55862 14.5418 5.5828C14.502 5.59792 13.1053 5.61608 11.0445 5.61305H7.60396L7.46178 5.67354C7.06383 5.87005 6.80208 6.26661 6.66564 6.94384C6.60879 7.21595 6.60879 7.94202 6.66564 8.21413C6.8163 8.96694 7.03823 9.30908 7.43334 9.51467L7.54709 9.57516L9.82176 9.60543C11.0725 9.60846 12.1136 9.6236 12.1249 9.63565C12.1362 9.64776 12.1277 9.74458 12.0965 9.87762C12.0624 10.0107 12.0055 10.2285 11.9828 10.3616C11.9344 10.6639 11.906 10.8758 11.869 11.0269L11.8406 11.1479H9.50901C7.75514 11.1389 7.11484 11.1147 7.00685 11.0874C6.77375 11.024 6.38693 10.8121 6.18227 10.6338C5.44605 9.98374 5.04492 8.90321 5.04492 7.57899C5.04492 6.88362 5.12744 6.3236 5.32926 5.79452C5.63341 4.99938 6.17962 4.42733 6.86467 4.16128C6.99601 4.10141 7.13739 4.07054 7.28026 4.07054H8.40011H9.73649V3.76809V3.46564H10.4189C11.0499 3.46564 11.1297 3.46564 11.1297 3.46564Z" fill="#A9A5B0"/>
                            <path d="M9.73693 14.5655C9.73693 14.5655 9.73977 14.3356 9.73693 14.2026V13.9607L7.86028 13.9636H7.23474V16.5345H5.6709V14.2963C5.67943 14.251 5.6709 13.7217 5.6709 13.7217V12.8597V12.4212C5.6709 12.4212 8.67125 12.3879 9.8222 12.3879L12.3812 12.4181L12.5234 12.3576C12.9214 12.1611 13.1832 11.7646 13.3195 11.0874C13.3764 10.8152 13.3764 10.0891 13.3195 9.81706C13.1689 9.06423 12.947 8.72208 12.5518 8.5165L12.4381 8.45601L10.1634 8.42576C8.91269 8.42274 8.36667 8.39551 8.36667 8.39551L8.22453 7.95695L8.02548 7.24617L7.97402 7.03447L7.94018 6.88324H10.4762C12.23 6.89231 12.8703 6.91652 12.9784 6.94373C13.2114 7.00722 13.5983 7.21902 13.8029 7.3974C14.5392 8.04743 14.9403 9.12796 14.9403 10.4522C14.9403 11.1475 14.8578 11.7076 14.6559 12.2367C14.4182 12.8583 14.0325 13.3435 13.5482 13.6528C13.2774 13.8257 12.9653 13.9093 12.6514 13.9455C12.2374 13.9934 11.5851 13.9607 11.5851 13.9607H11.1301V14.2328V14.5655H10.4477C9.81669 14.5655 9.73693 14.5655 9.73693 14.5655Z" fill="#A9A5B0"/>
                        </svg>
                        <span className="accounts-list__el-ping">187 ms</span>
                        <svg className="accounts-list__el-icon" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M2.375 14.6667H14.375" stroke="#FFC759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.10832 5.58667H3.04167C2.675 5.58667 2.375 5.88667 2.375 6.25334V12C2.375 12.3667 2.675 12.6667 3.04167 12.6667H4.10832C4.47498 12.6667 4.77498 12.3667 4.77498 12V6.25334C4.77498 5.88667 4.47498 5.58667 4.10832 5.58667Z" fill="#FFC759"/>
                            <path d="M8.90812 3.45996H7.84147C7.4748 3.45996 7.1748 3.75996 7.1748 4.12663V12C7.1748 12.3666 7.4748 12.6666 7.84147 12.6666H8.90812C9.27479 12.6666 9.57479 12.3666 9.57479 12V4.12663C9.57479 3.75996 9.27479 3.45996 8.90812 3.45996Z" fill="#FFC759"/>
                            <path d="M13.7079 1.33331H12.6413C12.2746 1.33331 11.9746 1.63331 11.9746 1.99998V12C11.9746 12.3666 12.2746 12.6666 12.6413 12.6666H13.7079C14.0746 12.6666 14.3746 12.3666 14.3746 12V1.99998C14.3746 1.63331 14.0746 1.33331 13.7079 1.33331Z" fill="#FFC759"/>
                        </svg>
                    </li>
                    <li className="accounts-list__el">
                        <svg className="accounts-list__el-market" fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M4.51851 7.60025C4.50829 6.26274 3.70524 5.97228 3.27734 6.00179C2.26587 6.00179 1.99902 6.69217 2 7.32571C2.00068 7.76459 2.28048 8.13459 2.59019 8.44556C3.91243 9.7732 4.73355 11.5714 5.07368 12.5962C5.14364 12.807 5.16784 13.0294 5.18168 13.251C5.27285 14.7115 5.96766 14.9998 6.49769 14.9998C7.06598 14.9998 7.82371 14.5262 7.82371 13.4844C7.82371 12.7962 8.77066 11.7163 9.49181 11.0231C9.754 10.771 10.134 10.6897 10.4476 10.5054C10.908 10.2349 11.0416 9.62931 11.044 9.27907L11.0442 9.26061C11.0456 9.14296 11.0311 7.89611 9.81275 7.89611C8.9711 7.89611 8.62744 8.6228 8.52328 9.17932C8.48304 9.3943 8.45711 9.61314 8.38061 9.81803C8.09531 10.5821 7.50808 11.6848 6.78183 11.6848C6.00617 11.6848 5.06097 9.49733 4.60275 8.17596C4.53874 7.99138 4.52 7.79561 4.51851 7.60025Z" fill="#A9A5B0"/>
                            <path d="M15.0124 7.69781C14.9834 6.27679 15.8148 5.97158 16.2529 6.00179C17.2644 6.00179 17.5312 6.69217 17.5303 7.32571C17.5296 7.76459 17.2498 8.13459 16.9401 8.44556C15.6178 9.7732 14.7967 11.5714 14.4566 12.5962C14.3866 12.807 14.3624 13.0294 14.3486 13.251C14.2574 14.7115 13.5626 14.9998 13.0326 14.9998C12.5032 14.9998 11.8093 14.7532 11.7169 13.8771C11.7027 13.7425 11.7155 13.6061 11.7486 13.4749C11.8248 13.1737 11.9764 12.7887 12.2135 12.6212C12.3524 12.5232 12.5266 12.4621 12.6316 12.3283C13.3698 11.3882 14.6267 9.54084 14.9797 8.08885C15.0107 7.96133 15.0151 7.82901 15.0124 7.69781Z" fill="#A9A5B0"/>
                        </svg>
                        <span className="accounts-list__el-ping">299 ms</span>
                        <svg className="accounts-list__el-icon" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M2.375 14.6667H14.375" stroke="#E03616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.10832 5.58667H3.04167C2.675 5.58667 2.375 5.88667 2.375 6.25334V12C2.375 12.3667 2.675 12.6667 3.04167 12.6667H4.10832C4.47498 12.6667 4.77498 12.3667 4.77498 12V6.25334C4.77498 5.88667 4.47498 5.58667 4.10832 5.58667Z" fill="#E03616"/>
                            <path d="M8.90812 3.45996H7.84147C7.4748 3.45996 7.1748 3.75996 7.1748 4.12663V12C7.1748 12.3666 7.4748 12.6666 7.84147 12.6666H8.90812C9.27479 12.6666 9.57479 12.3666 9.57479 12V4.12663C9.57479 3.75996 9.27479 3.45996 8.90812 3.45996Z" fill="#E03616"/>
                            <path d="M13.7079 1.33331H12.6413C12.2746 1.33331 11.9746 1.63331 11.9746 1.99998V12C11.9746 12.3666 12.2746 12.6666 12.6413 12.6666H13.7079C14.0746 12.6666 14.3746 12.3666 14.3746 12V1.99998C14.3746 1.63331 14.0746 1.33331 13.7079 1.33331Z" fill="#E03616"/>
                        </svg>
                    </li>
                </ul>
            </td>
            <td className="accounts__item accounts__item--guard">
                <span className="accounts__item-row accounts__item-bold">{guard}</span>
                <span className="accounts__item-row">
                    <svg className="accounts__item-progress" fill="none" height="11" viewBox="0 0 101 11" width="101">
                        <path d="M0.800781 6H100.801" stroke="#494B6F" strokeWidth="2"/>
                        <path d="M0.800781 6H60.8008" stroke="#8075FF" strokeWidth="2"/>
                    </svg>
                    <span className="accounts__item-time">{`${time} s.`}</span>
                </span>
            </td>
            <td className="accounts__item">
                <span className={classNames("accounts__item-status", `accounts__item-status--${status}`)}>{status}</span>
            </td>
        </tr>
    );
}