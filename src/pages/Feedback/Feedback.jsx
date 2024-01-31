import classNames from "classnames";
import {useContext} from "react";

import {AsideMenu, Header} from "../../components";
import {appContext} from "../../services";

import "./Feedback.style.scss";

import accountImage from "../../assets/images/accounts/1.png";
import background from "../../assets/images/backgrounds/feedback.png";


export default function Feedback() {
    const {theme} = useContext(appContext);

    const onSubmit = (event) => {} // Апи запрос на отправку фидбека
    
    
    return (
        <>
            <AsideMenu activePage='feedback'/>
            <div className="content">
                <Header title='Feedback'/>
                <div className="content__feedback">
                    <div className="content__feedback-wrapper">
                        <span></span>
                        <img alt="background" src={background}/>
                    </div>
                    <h2 className="content__feedback-title">Leave your feedback regarding our product</h2>
                    <p className="content__feedback-text">Help us get better and point out any flaws if you suddenly found them when using</p>
                    <div className="content__feedback-account feedback-account">
                        <img alt="account1" className="feedback-account__image" src={accountImage}/>
                        <p className="feedback-account__name">soo-ki</p>
                        <svg className="feedback-account__icon" fill="none" height="15" viewBox="0 0 14 15" width="14">
                            <path d="M7.58398 6.91666L12.3673 2.13333" stroke="#5B5A65" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M12.8332 4.46666V1.66666H10.0332" stroke="#5B5A65" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M6.41602 1.66666H5.24935C2.33268 1.66666 1.16602 2.83332 1.16602 5.74999V9.24999C1.16602 12.1667 2.33268 13.3333 5.24935 13.3333H8.74935C11.666 13.3333 12.8327 12.1667 12.8327 9.24999V8.08332" stroke="#5B5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <form className="content__feedback-form feedback-form" onSubmit={onSubmit}>
                        <input className="feedback-form__input" placeholder="The text of the review" name="feedback" type="text"/>
                        <div className="feedback-form__checkbox">
                            <input className={classNames("feedback-form__checkbox-input", theme === 'light' && 'light')} id="checkbox" name="checkbox" required type="checkbox"/>
                            <label className="feedback-form__checkbox-label" htmlFor="checkbox">I agree with the personal data processing policy</label>
                        </div>
                        <button className="feedback-form__button" type='submit'>Leave a review</button>
                    </form>
                </div>
            </div>
        </>
    );
}