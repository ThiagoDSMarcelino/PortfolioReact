import '../styles/main.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Stack from 'react-bootstrap/esm/Stack';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useLoadingContext } from '../contexts/LoadingContext';

const LoadingOverlay: React.FC = () => {
	const { isLoading } = useLoadingContext();

	if (!isLoading) {
		return <></>;
	}

	return (
		<div className='overlay'>
			<Stack
				direction='horizontal'
				gap={3}
				className='justify-content-center'
			>
				<FontAwesomeIcon icon={faArrowRotateRight} spin size='2xl' />
				<span className='h2'>Loading...</span>
			</Stack>
		</div>
	);
};

export default LoadingOverlay;
