# О проекте

Мобильное приложение на `React Native` на тему космоса.

## Запуск проекта

Выполнить следующие команды в терминале:

- `yarn` 
- `yarn start` 
- Запуск для Android - `yarn react-native run-android` 
- Запуск для iOS - через Xcode либо `yarn react-native run-ios`

## Библиотеки

- `Навигация:` @react-navigation/native, @react-navigation/native-stack, react-native-screens 
- `Проверка соединения с интернетом:` @react-native-community/netinfo 
- `Глобальное хранилище:` @reduxjs/toolkit, react-redux 
- `Асинхронное хранилище:` @react-native-async-storage/async-storage 
- `Запросы:` axios 
- `Стилизация:` styled-components

## Как все работает

**1.** В приложении 3 страницы: Старт, Вход, Главная, и Соединение отсутствует;  
**2.** После запуска проекта откроется страница Старт, где надо нажать кнопку `Начать` для перехода страницу входа;    
**3.** Нужно ввести имя пользователя, почту, и пароль для перехода на главную страницу;  
&ensp;&ensp;**3.1.** Имя пользователя - не короче 3 символов;  
&ensp;&ensp;**3.3.** Почта - До знака `@` могут идти цифры и буквы латинские и символы `.` и `_`, затем сам знак `@`, 
буквы латинские, далее `.` и в конце латинские буквы от 2 до 3. Например, валидные почты - `ff@mail.com`, `j_ames.1995@gmail.com`, невалидные - `jj@mail.c`, `кошка@mail.ru`;  
&ensp;&ensp;**3.3.** Пароль - не короче 8 символов;  
**4.** На главной странице распологается информация из источника [Astronomy picture of the day](https://go-apod.herokuapp.com/);  
&ensp;&ensp;4.1. При нажатии на картинку откроется модалка с ней в HD формате;  
&ensp;&ensp;4.2. В шапке при нажатии на кнопку `Выйти` будет выход из аккаунта;    
&ensp;&ensp;4.3. В самом низу есть ссылка на сам [источник](https://go-apod.herokuapp.com/#api-docs);  
**5.** После входа в аккаунт, если пользователь не выходит из него, при следующем старте приложения, он останется в нем;  
**6.** При отсутствии соединения с интернетом произойдет переход на соответствующую страницу.
