import React from 'react';

type ButtonPropsType = {
	text: string;
}

export const Button: React.FC<ButtonPropsType> = ({text}) => {
		return (
			<button className="button">{ text }</button>
		);
};
