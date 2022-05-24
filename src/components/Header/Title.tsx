import React from 'react';
import Typed from 'react-typed';

type TitlePropsType = {
	text: string;
}

export const Title: React.FC<TitlePropsType> = ({text}) => {
	return (
		<div className="header__title-box">
			<h2 className="header__title">{text}&nbsp;</h2>

			<Typed
				className="header__title"
				strings={['поздравляем нашу любимую учительницу', 'любим Гульмиру Корганбековну']}
				typeSpeed={100}
				backSpeed={80}
				loop
			/>
		</div>
	);
};
