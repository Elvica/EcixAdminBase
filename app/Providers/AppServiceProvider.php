<?php

namespace App\Providers;

use App\AdminLte;
use App\Events\BuildingMenu;
use App\Http\ViewComposers\AdminLteComposer;
use App\Message;
use App\Observers\MessageObserver;
use App\Repositories\MessagesCacheRepository;
use App\Repositories\MessagesRepository;
use App\Repositories\MessagesRepositoryInterface;
use App\Repositories\UsersCacheRepository;
use App\Repositories\UsersRepositoryInterface;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //

        $this->app->singleton(AdminLte::class, function (Container $app) {
            return new AdminLte(
                $app['config']['adminlte.filters'],
                $app['events'],
                $app
            );
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot( Factory $view, Dispatcher $events,  Repository $config) {


        $this->registerViewComposers($view);

        static::registerMenu($events, $config);

        $this->app->bind(
            UsersRepositoryInterface::class,
            UsersCacheRepository::class
        );
        $this->app->bind(
            MessagesRepositoryInterface::class,
            MessagesRepository::class
        );
        Message::observe(MessageObserver::class);

    }

    private function registerViewComposers(Factory $view)
    {
        $view->composer('layouts.page', AdminLteComposer::class);
    }

    public static function registerMenu(Dispatcher $events, Repository $config)
    {

        $events->listen(BuildingMenu::class, function (BuildingMenu $event) use ($config) {
            $menu = $config->get('adminlte.menu');

            call_user_func_array([$event->menu, 'add'], $menu);
        });
    }
}
