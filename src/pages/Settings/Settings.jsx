import {AsideMenu, Header} from "../../components";

import "./Settings.style.scss";


export default function Settings() {
    return (
        <>
            <AsideMenu activePage='settings'/>
            <div className="content">
                <Header title='Settings'/>
                <form className="content__settings">
                    <div className="content__settings-row settings">
                        <div className="settings__item">
                            <label className="settings__item-label" htmlFor="accounts">Working accounts</label>
                            <input className="settings__item-input" defaultValue="1..12 (12)" id="accounts" name="accounts" type="text"/>
                        </div>
                        <div className="settings__item">
                            <label className="settings__item-label" htmlFor="appID">App Id</label>
                            <input className="settings__item-input" defaultValue="730" id="appID" name="appID" type="text"/>
                        </div>
                        <div className="settings__item">
                            <label className="settings__item-label" htmlFor="rate">Usd Rmb Rate</label>
                            <input className="settings__item-input" defaultValue="7.2" id="rate" name="rate" type="text"/>
                        </div>
                        <div className="settings__item">
                            <label className="settings__item-label" htmlFor="googleID">Google table id</label>
                            <input className="settings__item-input" defaultValue="1a_yTAAQHExSlnOMuMbaouBMW" id="googleID" name="googleID" type="text"/>
                        </div>
                        <div className="settings__item">
                            <p className="settings__item-label">Auto readd items</p>
                            <div className="settings__item-readd readd">
                                <span>No</span>
                                <span className="active">Yes</span>
                            </div>
                        </div>
                        <button className="settings__button">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}