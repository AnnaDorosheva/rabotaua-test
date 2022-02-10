# Getting Started with Create React App
Страница вакансий.

Ссылка на рабочую страничку (демоверсия): https://annadorosheva.github.io/rabotaua-test/

Ссылка на код на github: https://github.com/AnnaDorosheva/rabotaua-test

Работа написана на react и hooks. Вместо загрузки с сервера информации для вакансий, я создала json файл внутри проэкта с 10ю обьектами вакансий, которые и рендерит приложение.

Страница адаптирована под два размера экрана: до 1200px и свыше 1200px.
В первом варианте вакансии рендерятся в один столбик вертикально, во втором варианте по три карточки в ряд.

По клику на кнопку "Откликнуться" открывается окно с предложением загрузить картинку либо закрыть это окно. Для загрузки картинок я воспользовалась сервисом Uploadercare. После удачной загрузки картинки, карточка помечается как откликнутая, статус тоже меняется на "вы откликнулись", и на широких вариантах карточек добавляется живая ссылка на загруженное резюме. В случае ошибки высвечивается сообщение об ошибке и есть возможность повторить загрузку.

Кнопки для добавления в избранное и наоборот для отметки дизлайка работают, при дизлайке карточка меняет цвет и появляется статус "неинтересная", при повторном клике на дизлайк этот статус и стиль можно вернуть в начальное значение.

Все измения вкарточках сохраняются при перезагрузке страницы, для этого я использовала localStorage.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
