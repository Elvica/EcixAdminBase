<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Title
    |--------------------------------------------------------------------------
    |
    | The default title of your admin panel, this goes into the title tag
    | of your page. You can override it per page with the title section.
    | You can optionally also specify a title prefix and/or postfix.
    |
    */

    'title' => 'Ecix Base',

    'title_prefix' => '',

    'title_postfix' => '',

    /*
    |--------------------------------------------------------------------------
    | Logo
    |--------------------------------------------------------------------------
    |
    | This logo is displayed at the upper left corner of your admin panel.
    | You can use basic HTML here if you want. The logo has also a mini
    | variant, used for the mini side bar. Make it 3 letters or so
    |
    */

    'logo_login' => '<img src="/img/ecix-group_logo.svg" alt="Ecix Logo" class="loginLogo" />',

    'logo' => '<img src="/img/ecix-group_logo-full-white.svg" height="70%" width="70%"/>',

    'logo_mini' => '<img src="/img/logo-elix-E.svg"  width="90%" height="90%"/>',

    /*
    |--------------------------------------------------------------------------
    | Skin Color
    |--------------------------------------------------------------------------
    |
    | Choose a skin color for your admin panel. The available skin colors:
    | blue, black, purple, yellow, red, and green. Each skin also has a
    | ligth variant: blue-light, purple-light, purple-light, etc.
    |
    */

    'skin' => 'blue',

    /*
    |--------------------------------------------------------------------------
    | Layout
    |--------------------------------------------------------------------------
    |
    | Choose a layout for your admin panel. The available layout options:
    | null, 'boxed', 'fixed', 'top-nav'. null is the default, top-nav
    | removes the sidebar and places your menu in the top navbar
    |
    */

    'layout' => null,

    /*
    |--------------------------------------------------------------------------
    | Collapse Sidebar
    |--------------------------------------------------------------------------
    |
    | Here we choose and option to be able to start with a collapsed side
    | bar. To adjust your sidebar layout simply set this  either true
    | this is compatible with layouts except top-nav layout option
    |
    */

    'collapse_sidebar' => false,

    /*
    |--------------------------------------------------------------------------
    | URLs
    |--------------------------------------------------------------------------
    |
    | Register here your dashboard, logout, login and register URLs. The
    | logout URL automatically sends a POST request in Laravel 5.3 or higher.
    | You can set the request to a GET or POST with logout_method.
    | Set register_url to null if you don't want a register link.
    |
    */

    'dashboard_url' => '/',

    'logout_url' => 'logout',

    'logout_method' => null,

    'login_url' => 'login',

    'register_url' => 'register',

    /*
    |--------------------------------------------------------------------------
    | Menu Items
    |--------------------------------------------------------------------------
    |
    | Specify your menu items to display in the left sidebar. Each menu item
    | should have a text and and a URL. You can also specify an icon from
    | Font Awesome. A string instead of an array represents a header in sidebar
    | layout. The 'can' is a filter on Laravel's built in Gate functionality.
    |
    */

    'menu' => [
        'NAVEGACIÓN',

        [
            'text' => 'Blog',
            'url'  => 'admin/blog',
            'can'  => 'read-users',
        ],
        [
            'text'        => 'Dashboard',
            'url'         => '/dashboard/dash1',
            'icon'        => 'dashboard',
            'labels'      => [
               [
                   'label'       => 4,
                    'label_color' => 'success',
               ]
            ]
        ],
        [
            'text'        => 'Widgets',
            'url'         => '/widgets/widgets',
            'icon'        => 'th',
            'labels'      => [
                [
                    'label'       => 'new',
                    'label_color' => 'success',
                ]
            ]
            //'permission' => 'read-userss'
        ],
        'USUARIOS',


        [
            'text'        => 'Listado Datatable',
            'url'         => '/users',
            'icon'        => 'user-circle',

        ],
        [
            'text'        => 'Listado Paginador Laravel',
            'url'         => '/usersPaginate',
            'icon'        => 'user-circle',

        ],

        'Ejemplos',
        [
            'text' => 'Chats',
            'icon' => 'pie-chart',
            'submenu' => [
                [
                    'text' => 'ChartJS',
                    'url'  => 'ejemplos/chartjs',
                    'icon' => 'pie-chart',
                ],
                [
                    'text' => 'Morris',
                    'url'  => 'ejemplos/morris',
                    'icon' => 'bar-chart',
                ],
                [
                    'text' => 'Flot',
                    'url'  => 'ejemplos/flot',
                    'icon' => 'area-chart',
                ],
                [
                    'text' => 'Inline charts',
                    'url'  => 'ejemplos/inlinecharts',
                    'icon' => 'line-chart',
                ],
            ],
        ],
        [
            'text' => 'Elementos UI',
            'icon' => 'laptop',
            'submenu' => [
                [
                    'text' => 'Generales',
                    'url'  => 'uielements/generals',
                ],
                [
                    'text' => 'Iconos',
                    'url'  => 'uielements/icons',
                ],
                [
                    'text' => 'Botones',
                    'url'  => 'uielements/buttons',
                ],
                [
                    'text' => 'Sliders',
                    'url'  => 'uielements/sliders',
                ],
                [
                    'text' => 'Timeline',
                    'url'  => 'uielements/timeline',
                ],
                [
                    'text' => 'Modales',
                    'url'  => 'uielements/modals',
                ],
                [
                    'text' => 'SweeAlert',
                    'url'  => 'uielements/sweetalert',
                ],
            ]
        ],
       [
            'text' => 'Formularios',
            'icon' => 'edit',
            'submenu' => [
                [
                    'text' => 'Elementos generales',
                    'url'  => 'forms/elemgenerales',
                    'icon' => 'edit',
                ],
                [
                    'text' => 'Elementos especiales',
                    'url'  => 'forms/elemespeciales',
                    'icon' => 'wrench',
                ],
                [
                    'text' => 'Editores',
                    'url'  => 'forms/editores',
                    'icon' => 'edit',
                ],
            ]
        ],
        [
            'text' => 'Tablas',
            'icon' => 'table',
            'submenu' => [
                [
                    'text' => 'Simples',
                    'url'  => 'tables/simple',
                    'icon' => 'circle-o',
                ],
                [
                    'text' => 'Datatable',
                    'url'  => 'tables/datatable',
                    'icon' => 'circle-o',
                ],

            ]
        ],
        [
            'text' => 'Calendar',
            'icon' => 'calendar',
            'url'  => 'calendar/calendar',
            'labels' => [

                [
                    'label'       => 6,
                    'label_color' => 'danger',
                ],
                [
                    'label'       => 9,
                    'label_color' => 'success',
                ],

            ]
        ],
        [
            'text' => 'Mailbox',
            'icon' => 'envelope',
            'url'  => 'mailbox/mailbox',
            'submenu' => [
                [
                    'text' => 'Inbox',
                    'url'  => 'mailbox/inbox',
                    'labels' => [
                        [
                            'label'       => 6,
                            'label_color' => 'warning',
                        ],
                        [
                            'label'       => 9,
                            'label_color' => 'success',
                        ],
                    ]
                ], [
                    'text' => 'Redactar',
                    'url'  => 'mailbox/compose',

                ], [
                    'text' => 'Leer',
                    'url'  => 'mailbox/read',

                ],
            ]
        ],

        'ACCOUNT SETTINGS',
        [
            'text' => 'Profile',
            'url'  => 'user/profile',
            'icon' => 'user',
        ],
        [
            'text' => 'Change Password',
            'url'  => 'admin/passChange',
            'icon' => 'lock',
        ],
        [
            'text'    => 'Multilevel',
            'icon'    => 'share',
            'submenu' => [
                [
                    'text' => 'Level One',
                    'url'  => '#',
                ],
                [
                    'text'    => 'Level One',
                    'url'     => '#',
                    'submenu' => [
                        [
                            'text' => 'Level Two',
                            'url'  => '#',
                        ],
                        [
                            'text'    => 'Level Two',
                            'url'     => '#',
                            'submenu' => [
                                [
                                    'text' => 'Level Three',
                                    'url'  => '#',
                                ],
                                [
                                    'text' => 'Level Three',
                                    'url'  => '#',
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    'text' => 'Level One',
                    'url'  => '#',
                ],
            ],
        ],
        'LABELS',
        [
            'text'       => 'Important',
            'icon_color' => 'red',
        ],
        [
            'text'       => 'Warning',
            'icon_color' => 'yellow',
        ],
        [
            'text'       => 'Information',
            'icon_color' => 'aqua',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Menu Filters
    |--------------------------------------------------------------------------
    |
    | Choose what filters you want to include for rendering the menu.
    | You can add your own filters to this array after you've created them.
    | You can comment out the GateFilter if you don't want to use Laravel's
    | built in Gate functionality
    |
    */

    'filters' => [
        App\Menu\Filters\HrefFilter::class,
        App\Menu\Filters\ActiveFilter::class,
        App\Menu\Filters\SubmenuFilter::class,
        App\Menu\Filters\ClassesFilter::class,
        App\Menu\Filters\GateFilter::class,
        App\Menu\Filters\PermissionFilter::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Plugins Initialization
    |--------------------------------------------------------------------------
    |
    | Choose which JavaScript plugins should be included. At this moment,
    | only DataTables is supported as a plugin. Set the value to true
    | to include the JavaScript file from a CDN via a script tag.
    |
    */

    'plugins' => [
        'datatables' => true,
        'select2'    => true,
        'chartjs'    => true,
    ],
];
