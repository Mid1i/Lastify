import classNames from "classnames";

import "./OverviewRequestsItem.style.scss";


export default function OverviewRequestsItem({name, quality, percents, time, errors, proxy}) {
    return (
        <tr>
            <td className="requests-table__item requests-table__item--name">
                <span className="requests-table__item-bold">{name.slice(0, name.indexOf('.'))}</span>
                {name.slice(name.indexOf('.'))}
            </td>
            <td className="requests-table__item requests-table__item--quality">
                <span className="requests-table__item-bold">{quality}</span>
                <span className="requests-table__item-percents">{percents}</span>
            </td>
            <td className={classNames("requests-table__item requests-table__item--time", Number(time) < 2 ? "requests-table__item--time--good" : (Number(time) >= 4 ? "requests-table__item--time--bad" : "requests-table__item--time--average"))}>{time}</td>
            <td className="requests-table__item requests-table__item--errors">
                {errors.map((error, index) => (
                    <span className="requests-table__item-row" key={index}>
                        <span>{error.amount}</span>
                        <span>{error.name}</span>
                    </span>
                ) || '')}
            </td>
            <td className="requests-table__item requests-table__item--proxys">
                <span className="requests-table__item-bold">{proxy}</span>
            </td>
        </tr>
    );
}