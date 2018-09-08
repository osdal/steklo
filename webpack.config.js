let path = require('path'); // Чтобы указать абсолютный путь

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === 'production';

const devMode = process.env.NODE_ENV === 'production'



let conf = {
	entry: './js/source/script.js', // Откуда
	output: { // Куда
		path : path.resolve(__dirname, './js/dist/'), // В какую папку
		filename: 'bundler.js', // Как назвать файл
		publicPath: 'dist/' // За кем следить
	}, // Указываем пути к файлам

	module: {
		rules: [
			{
				test: /\.js$/, // Использовать регулярное выражение
				loader: 'babel-loader'
			},
			/*{
				test: /\.less$/, use:  [
								          {
								          	loader: MiniCssExtractPlugin.loader,
		  							          options: {
		  									              // you can specify a publicPath here
		  									              // by default it use publicPath in webpackOptions.output
		  									              publicPath: './dist'
		  									           }
		  							      },
		  							      'style-loader',
		  							      'css-loader',
		  							      'less-loader'
	 
        								],
			},*/
			/*{

               test: /\.less$/, // .less and .css
               use: [
                   isProduction ? MiniCssExtractPlugin.loader : 
                   'style-loader',
                   'css-loader',
                   'less-loader'
               ]
           }*/
		]
	},



	/*plugins: [
    
    new MiniCssExtractPlugin({filename: "style.css",})
  ]*/
};
	// watch: true;
	// devtool: 'cheap-eval-source-map'



module.exports = conf;