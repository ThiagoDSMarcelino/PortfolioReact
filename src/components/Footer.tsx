import { useThemeContext } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
	const { theme } = useThemeContext();
	const textColor = theme === 'dark' ? 'light' : 'dark';

	return (
		<footer
			className={`fixed-bottom py-3 text-center fs-5 font-weight-bold bg-${theme} text-${textColor}`}
		>
			&copy; Thiago S. Marcelino
		</footer>
	);
};

export default Footer;
