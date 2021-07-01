export const fadeIn = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.75 }
		}
	}
};

export const popup = {
	hidden: {
		opacity: 0,
		scale: 0.5
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.75
		}
	}
};

export const down = {
	hidden: {
		opacity: 0,
		y: 100
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1
		}
	}
};

export const slide = {
	hidden: {
		opacity: 0,
		x: -100
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1
		}
	}
};
