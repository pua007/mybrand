import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__dumy}>
                <div className={styles.header__dumy__box}>
                    <ul className={styles.header__dumy__box__menu}>
                        <li className={styles.brand}>
                            <a href="">
                                <span>Brand</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="">
                                        <span>소개</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>BI</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>본사</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>오시는 길</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.menu}>
                            <a href="">
                                <span>Menu</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="">
                                        <span>디저트</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>커피 & 음료</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>MD상품</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.store}>
                            <a href="">
                                <span>Store</span>
                                <ul>
                                    <li>
                                        <a href="">
                                            <span>매장찾기</span>
                                        </a>
                                    </li>
                                </ul>
                            </a>
                        </li>
                        <li className={styles.community}>
                            <a href="">
                                <span>Community</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="">
                                        <span>이벤트 & 소식</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>공지</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>판매 매장 리스트</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>고객 문의 접수</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.franchise}>
                            <a href="">
                                <span>Franchise</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="">
                                        <span>창업경쟁력</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>인테리어</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>가맹절차</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>가맹문의</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>제휴 제안</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={styles.header__box__social}>
                        <li>
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
