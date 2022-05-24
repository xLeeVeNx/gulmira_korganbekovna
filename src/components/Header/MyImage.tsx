import React from 'react';

import myPhoto from '../../assets/images/HeaderMe.jpg';

export const MyImage: React.FC = () => {
	return (
		<img className="header__image" src={ myPhoto } alt="Personal" />
	);
};
