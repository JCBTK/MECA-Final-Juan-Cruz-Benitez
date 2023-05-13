-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-05-2023 a las 02:54:17
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `meca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Cinco procesos de maquinado de autopartes para tener en cuenta', 'Ya que la evolución de la tecnología está intrínsecamente ligada a las necesidades del mercado y sus posibilidades de desarrollo, resulta útil observar de manera continua cuáles son las novedades en maquinaria y periféricos. Basado en el desarrollo presente de la industria de automotriz, el autor nos señala cuáles son los procesos de maquinado de mayor relevancia en los años por venir.', 'Uno de los aspectos que más afecta al panorama de los fabricantes de autopartes hoy en día es la perspectiva del aumento en el consumo de autos eléctricos hacia el futuro. Estudios actuales predicen que cerca del 30 % de los automóviles de uso particular tendrá un sistema de propulsión completamente eléctrico o será híbrido (motor eléctrico + combustión interna) para el año 2030. Esto no toma en cuenta todo el sector utilitario que incluye pick-ups, transporters y camiones, para los cuales se espera que tengan un transcurso hacia la propulsión eléctrica aún más lento.\r\n\r\nPor un lado, se reconoce que aún si se disminuye el número de piezas por auto en el sector de generación y transmisión de potencia, el resto de las partes se seguirán necesitando. La suspensión, carrocería, partes internas, etcétera, siguen siendo necesarias. Por otro lado, aún existe un gran nicho de mercado sin satisfacer en los países de economías emergentes donde rápidamente crece el número de vehículos per cápita debido al desarrollo en infraestructura interna y al aumento del poder adquisitivo de sus habitantes. Una nación como Estados Unidos, con cerca de 900 vehículos por cada 1000 habitantes, contrasta con las cifras de economías crecientes como la de China, con 150 vehículos por 1000 personas, o India con tan solo 50 vehículos por 1000 habitantes (cifras entre 2015 y 2017). Definitivamente sigue habiendo un gigantesco potencial a futuro para la fabricación y comercialización de vehículos mundialmente, tanto de motor de combustión como eléctrico.\r\n\r\nEn el caso de los autos propulsados por motores eléctricos o híbridos, se abre un gigantesco reto para los fabricantes debido a que aún al día de hoy no existen grandes cadenas de producción en serie del tamaño y del nivel de confiabilidad con el que cuentan los sistemas de combustión interna. Los principales fabricantes de componentes para el tren motriz como ZF Friedrichshafen AG, de Alemania, han venido adquiriendo compañías especializadas en temas eléctricos y electrónicos para fortalecer su capacidad y proyectarse hacia la producción en masa de los nuevos conjuntos de piezas. No hay que olvidar que una de cada dos máquinas herramienta producidas en ese país se destina a alguna aplicación de la industria automotriz. La posible reducción en la necesidad de utilizar máquinas altamente especializadas en rectificado de cigüeñales o el bruñido de cilindros, abre la necesidad generar otras soluciones a esta gigantesca industria.\r\n\r\nAl final, desde el punto de vista de los procesos de manufactura, todo este movimiento, que no deja de tener en cuenta que existen cada vez más modelos de vehículos y estos se reemplazan con cada vez mayor frecuencia, se traduce en tener la capacidad de producir series más pequeñas de manera flexible, a muy altas velocidades, con costos de producción menores, herramientas de automatización, menores tiempos de desarrollo, mejores materiales y mayores requerimientos de precisión.', NULL),
(2, '¿Son los repuestos impresos en 3D una alternativa duradera para tu coche?', 'La tecnología se apodera de todos nosotros y, en la mayoría de los casos, es capaz de mejorar considerablemente nuestra calidad de vida.', 'Uno de los métodos de trabajo y producción de los que más se habla últimamente son los productos realizados, total o parcialmente, mediante impresoras de 3D. Por ello nos hemos hecho la pregunta de si este método es viable a la hora de producir diferentes repuestos para el automóvil.\r\nDesde unos años atrás, la impresión 3D es utilizada por arquitectos para realizar maquetas en el propio sector automotriz, también para realizar maquetas a escala y posteriormente comprobar la aerodinámica en el túnel de viento, incluso en medicina para crear prótesis o sustituir a la escayola cuando es necesario inmovilizar alguna parte del cuerpo.\r\n\r\nPor tanto, ¿por qué no se iba a utilizar este sistema en el automóvil?\r\n\r\n¿Quieres una pieza 3D? La tienes\r\nLas principales ventajas de la impresión 3D son que permiten construir cualquier pieza en poco tiempo, utilizar diferentes materiales, obtener tanto elementos totalmente rígidos como ligeramente flexibles, más o menos frágiles e, incluso, se pueden imprimir directamente coloreados; aunque la gama de colores actual es muy limitada y depende de los materiales. Y por supuesto, un ahorro en tiempo y dinero gracias a estos prototipos.\r\n\r\n', NULL),
(3, '¿Cómo mejoraría la impresión 3D el sector de la automoción?', 'La impresión 3D puede ayudar al propio cliente a la hora de comprar su coche nuevo: la personalización como nunca antes la habíamos visto', 'La impresión 3D puede ayudar de diversas maneras al sector. Además de facilitar su tarea a los desarrolladores y diseñadores de los distintos modelos, puede ayudar al propio cliente a la hora de comprar su coche nuevo. Esto se ha demostrado con el prototipo Toyota uBox. El modelo uBox ofrece la opción de personalizar varias piezas interiores con la tecnología de impresión 3D, por tanto, es posible configurarlo al gusto de cada comprador. Sólo debe elegir el diseño entre todos los que ya existan o crear él mismo un boceto. Además, si se cansa de su diseño, basta con una impresora 3D para cambiar la imagen del interior de su coche.\r\n\r\nTambién vemos un gran beneficio para modelos exclusivos. En lugar de tener que crear multitud de moldes para vehículos cuya demanda será muy baja (con el aporte económico que ello supone) o utilizar algunas piezas de coches más comunes, con diseñar a ordenador y dar a imprimir tantas veces unidades vayan a ser producidas será suficiente. Ahorraremos mucho dinero ya que la inversión será bastante inferior.\r\n\r\n', NULL),
(4, 'La Universidad Nebrija y ArcelorMittal aplicaron la impresión 3D en acero en un vehículo del Dakar', 'La pieza fue impresa en el centro de Avilés y en su creación participaron ingenieros especializados en diseño, análisis computacional y procesos de fabricación  ', 'Algunos estudiantes de la Universidad Nebrija se han encargado del rediseño y mejora tecnológica de un coche de la marca Sodicars que ha disputado la categoría reina (T1) del rally Dakar 2023, que ha concluido este domingo con el triunfo del catarí Nasser Al-Attiyah y el argentino Kevin Benavides.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Juan', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'monica', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
