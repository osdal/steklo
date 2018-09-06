let path = require('path'); // Чтобы указать абсолютный путь

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';



let conf = {
	entry: './/js/source/parts/', // Откуда
	output: { // Куда
		path : path.resolve(__dirname, './js/dist/'), // В какую папку
		filename: 'bundler.js', // Как назвать файл
		publicPath: 'dist-js/' // За кем следить
	}, // Указываем пути к файлам

	module: {
		rules: [
			{
				test: /\.js$/, // Использовать регулярное выражение
				loader: 'babel-loader'
			}
		]
	}
	// watch: true,
	// devtool: 'cheap-eval-source-map'

}

module.exports = conf;