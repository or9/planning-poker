# Planning Poker
Planning poker webapp  
Laravel 5.1, Redis, APC  

##Installation
###Local
```
composer install 
php -r "copy('.env.example', '.env');"
php artisan key:generate
redis-server &
php artisan serve
```
If you're going to use Redis,  
```
brew install php56-redis
brew install redis
```
###Remote
Sufficient commands should be included in composer.json's scripts. 
