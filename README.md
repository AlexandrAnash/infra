[![Build Status](https://travis-ci.org/AlexandrAnash/ht6.svg?branch=master)](https://travis-ci.org/AlexandrAnash/ht6) [![bitHound Overall Score](https://www.bithound.io/github/AlexandrAnash/ht6/badges/score.svg)](https://www.bithound.io/github/AlexandrAnash/ht6)

№Настройка инфраструктуры.
В данной работе было разработано не большое Node.js приложение, которое умеет писать логи и отдавать на клиента данные с заданием.
- Настроил eslint для проверки кода, тесты автоматически запускаются командой: “npm run test-eslint”
- Настроил хостинг Heroku для Node.js 
В логах на хостинге можно увидеть состояние приложения, по каким маршрутам и с какого ip заходили на сайт. 
Так же можно смотреть логи в реальном времени командой “heroku logs --tail”
И конечно же разработчик может сам писать логи и видеть как ведет себя конкретное приложение. В данной работе логируется состояние, когда пользователь пытается нажать на цвета в неправильной последовательности.(рис.1)
- Был настроен облачный линтер “BitHound”. Во время разработки можно было наблюдать за анализом кода. (рис.2)
- Так же был настроен мониторинг (рис.3)

<img src="./screenshot/1.png" width="500">

рис.1 


<img src="./screenshot/2.png" width="500">

рис.2

<img src="./screenshot/3.png" width="500">

рис.3 

<img src="./screenshot/4.png" width="500">

рис.4 
