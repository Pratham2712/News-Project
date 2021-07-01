import React from 'react';

import spinner from '../img/spinner.gif';

const Spinner = () => {
	return (
		<div>
			<img
				src={spinner}
				alt="Loading..."
				style={{
					width: '100px',
					margin: 'auto',
					display: 'block',
					position: 'absolute',
					top: '50%',
					right: '50%'
				}}
			/>
		</div>
	);
};

export default Spinner;
