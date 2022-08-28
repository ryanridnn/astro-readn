import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ReactComponent as NavArrow } from "../../assets/svg/nav-arrow.svg";

import "swiper/css";
import "swiper/css/effect-cards";
import "./CardSwiper.scss";
import { EffectCards } from "swiper";

export type Blog = {
	title: string;
	thumb: string;
	slug: string;
	topic: string;
	readingTime: string;
};

export default function CardSwiper({ blogs }: { blogs: Blog[] }) {
	const [swiper, setSwiper] = useState(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<div className="cards">
			<Swiper
				className="cards__container"
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				onSwiper={(swiper) => setSwiper(swiper)}
				onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
			>
				{blogs.map((blog: Blog, index: number) => (
					<SwiperSlide key={index}>
						<a href={`/blog/${blog.slug}`}>
							<div className="card">
								<img
									className="card__image"
									src={blog.thumb}
									alt="blog thumbnail"
								/>
								<div className="card__body">
									<h3 className="card__title">
										{blog.title}
									</h3>
									<div className="card__details">
										<div className="card__topic">
											{blog.topic}
										</div>
										<div className="card__bullet"></div>
										<div className="card__reading-time">
											{blog.readingTime}
										</div>
									</div>
								</div>
							</div>
						</a>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="cards__navigation">
				<div
					onClick={() => swiper.slidePrev()}
					className={`cards__arrow cards__left-arrow ${
						currentIndex !== 0 ? "cards__arrow--active" : ""
					}`}
				>
					<div className="arrow">
						<NavArrow />
					</div>
					<div className="line"></div>
				</div>
				<div
					onClick={() => swiper.slideNext()}
					className={`cards__arrow cards__right-arrow ${
						currentIndex !== blogs.length - 1
							? "cards__arrow--active"
							: ""
					}`}
				>
					<div className="line"></div>
					<div className="arrow">
						<NavArrow />
					</div>
				</div>
			</div>
		</div>
	);
}
