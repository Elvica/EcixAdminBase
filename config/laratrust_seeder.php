<?php

return [
    'role_structure' => [
        'superadministrator' => [
            'users' => 'c,r,u,d',
            'acl' => 'c,r,u,d',
            'profile' => 'r,u'
        ],
        'administrator' => [
            'users' => 'c,r,u,d',
            'profile' => 'r,u'
        ],
        'user' => [
            'profile' => 'r,u'
        ],
    ],
    'permission_structure' => [
        'cru_user' => [
            'profile' => 'c,r,u'
        ],
    ],
    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete'
    ],
    'users' => [
        'superadministrator' => [
            'name' => 'Jesús',
            'last_name' => 'Vicario Jover',
            'email' => 'jesus.vicario@ecixgroup.com'
        ],
        'administrator' => [
            'name' => 'Moises',
            'last_name' => 'Oteros',
            'email' => 'moises.otero@ecixgroup.com'
        ],
        'user' => [
            'name' => 'Cesar',
            'last_name' => 'Alonso Sola',
            'email' => 'cesar.alonso@ecixgroup.com'
        ],
    ],
];
