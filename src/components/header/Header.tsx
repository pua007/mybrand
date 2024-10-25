import React, { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.header}>
            <div
                className={`${styles.header__hidden} ${
                    isActive ? styles.visible : ""
                }`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            ></div>
            <div
                className={`${styles.header__dumy} ${
                    isActive ? styles.visible : ""
                }`}
            >
                <div
                    className={styles.header__dumy__box}
                    onMouseLeave={() => setIsActive(false)}
                >
                    <ul
                        className={styles.header__dumy__box__menu}
                        onMouseEnter={() => setIsActive(true)}
                    >
                        <li className={styles.brand}>
                            <a href="" className={styles.eng}>
                                <span>Brand</span>
                            </a>
                            <ul className={`${isActive ? styles.visible : ""}`}>
                                <li>
                                    <a href="" className={styles.brandsub1}>
                                        <span>소개</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={styles.brandsub2}>
                                        <span>BI</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={styles.brandsub3}>
                                        <span>본사</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={styles.brandsub4}>
                                        <span>오시는 길</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.menu}>
                            <a href="" className={styles.eng}>
                                <span>Menu</span>
                            </a>
                            <ul className={`${isActive ? styles.visible : ""}`}>
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
                            <a href="" className={styles.eng}>
                                <span>Store</span>
                            </a>
                            <ul className={`${isActive ? styles.visible : ""}`}>
                                <li>
                                    <a href="">
                                        <span>매장찾기</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.community}>
                            <a href="" className={styles.eng}>
                                <span>Community</span>
                            </a>
                            <ul className={`${isActive ? styles.visible : ""}`}>
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
                            <a href="" className={styles.eng}>
                                <span>Franchise</span>
                            </a>
                            <ul className={`${isActive ? styles.visible : ""}`}>
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
                    <ul className={styles.header__dumy__box__sns}>
                        <li>
                            <a href="" className={styles.facebook}>
                                <img
                                    src="src/assets/headerimages/Facebook.svg"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="" className={styles.insta}>
                                <img
                                    src="src/assets/headerimages/Instagram.svg"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="" className={styles.youtube}>
                                <img
                                    src="src/assets/headerimages/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="" className={styles.tiktok}>
                                <img
                                    src="src/assets/headerimages/tiktok.svg"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <h1 className={styles.header__dumy__box__logo}>
                        <span className="hidden">로고</span>
                        <a href="" className={styles.logowrap}>
                            <span>
                                <img
                                    src="src/assets/headerimages/simbol.svg"
                                    alt=""
                                />
                            </span>
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
