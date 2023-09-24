import { useThemeContext } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
	const { theme, isDark } = useThemeContext();
	const textColor = isDark ? 'light' : 'dark';

	return (
		<footer
			className={`fixed-bottom py-2 text-center bg-${theme} text-${textColor}`}
		>
			<strong>&copy; Thiago S. Marcelino</strong>
		</footer>
	);
};

export default Footer;
