# Planning Poker
Planning poker webapp  
Laravel 5.1, Redis, APC  

##Installation
###Local
```
composer install 
php -r "copy('.env.example', '.env');"
php artisan key:generate
php artisan serve
```
###Remote
Sufficient commands should be included in composer.json's scripts. 
