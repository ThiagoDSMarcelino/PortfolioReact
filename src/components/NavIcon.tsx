import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Nav } from 'react-bootstrap';
import React from 'react';

interface NavIconProps {
	icon: IconProp;
	onClick?: () => void;
	href?: string;
}

const NavIcon: React.FC<NavIconProps> = ({ icon, onClick, href }) => {
	return (
		<div className='icon'>
			<Nav.Link
				onClick={onClick}
				href={href}
				target='_blank'
				rel='noreferrer'
			>
				<FontAwesomeIcon icon={icon} size='lg' />
			</Nav.Link>
		</div>
	);
};

export default NavIcon;
