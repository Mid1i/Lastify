import {AccountsItem, AsideMenu, Header} from "../../components";

import "./Accounts.style.scss";

import accountImage from "../../assets/images/accounts/1.png";


export default function Accounts() {
    const accountsItems = [
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Active',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Banned',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Inactive',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Active',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Active',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Active',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Active',
        },
        {
            'number': '33',
            'image': accountImage,
            'name': 'soo-ki',
            'id': '**************',
            'host': '45.314.1831',
            'country': 'Thailand',
            'ping': '87',
            'guard': 'AVEKQN',
            'time': '8',
            'status': 'Active',
        },
    ]


    return (
        <>
            <AsideMenu activePage='accounts'/>
            <div className="content">
                <Header title='Steam accounts'/>
                <div className="content__accounts">
                    <div className="content__accounts-search">
                        <input placeholder="Username" name="search" type="text"/>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58335C17.5003 5.2111 13.9559 1.66669 9.58366 1.66669C5.2114 1.66669 1.66699 5.2111 1.66699 9.58335C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z" stroke="#A9A5B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.3337 18.3334L16.667 16.6667" stroke="#A9A5B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <table className="content__account-items accounts">
                        <thead>
                            <tr>
                                <td className="accounts__header accounts__header--number">Number</td>
                                <td className="accounts__header">Username</td>
                                <td className="accounts__header">Steam Id</td>
                                <td className="accounts__header">Host (IP)</td>
                                <td className="accounts__header">
                                    <span className="accounts__header-text">Ping</span>
                                    <svg className="accounts__header-icon" fill="none" height="14" viewBox="0 0 14 14" width="14">
                                        <path d="M12.516 7.00002C12.516 10.22 10.0893 12.8334 7.09928 12.8334C4.10928 12.8334 2.28387 9.59002 2.28387 9.59002M2.28387 9.59002H4.7322M2.28387 9.59002V12.5067M1.68262 7.00002C1.68262 3.78002 4.08762 1.16669 7.09928 1.16669C10.7122 1.16669 12.516 4.41002 12.516 4.41002M12.516 4.41002V1.49335M12.516 4.41002H10.111" stroke="#F8F0FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </td>
                                <td className="accounts__header">Steam Guard</td>
                                <td className="accounts__header">Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {accountsItems.map((item, index) => (<AccountsItem {...item} key={index}/>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}